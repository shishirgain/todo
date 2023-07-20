import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAxios } from '../axios'
import { useRouter } from 'vue-router'

export const useApplication = defineStore('application', () => {
    const router = useRouter()
    const axios = useAxios()
    // state
    const user = ref(null)
    const list = ref([
        { id: 1, title: 'title1', description: 'some note', done: false },
        { id: 2, title: 'title2', description: 'some note', done: false },
        { id: 3, title: 'title3', description: 'some note', done: true },
        { id: 4, title: 'title4', description: 'some note', done: false },
        { id: 5, title: 'title5', description: 'some note', done: true },
        { id: 6, title: 'title6', description: 'some note', done: false }
    ])

    const loading = ref(false)

    // methods
    const triggerNote = (note) => {
        let selected = list.value.find(item => item.id === note.id)
        selected.done = !selected.done
    }

    const Me = () => {
        loading.value = true
        axios.get('/me').then(res => {
            user.value = res.data
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            loading.value = false
        })
    }

    const Login = (formData) => {
        axios.post('/login', formData).then(res => {
            localStorage.token = res.data.token;
            router.push({ name: 'home' })
        }).catch(err => {
            console.log(err)
        }).finally(() => { })
    }

    const Logout = () => {
        axios.post('/logout').then(res => {
            console.log(res.data.message);
            localStorage.removeItem('token')
            router.push({ name: 'auth/login' })
        }).catch(err => {
            console.log(err);
        }).finally(() => { })
    }
    return { user, list, loading, triggerNote, Login, Logout, Me }
})
