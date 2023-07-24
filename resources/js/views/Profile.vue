<script setup>
import { reactive, ref, onBeforeMount } from 'vue'
import { useApplication } from '../store/application'
const appStore = useApplication()
const user = appStore.user

import { useAxios } from '../axios'

const axios = useAxios()
// state
const formData = reactive({})
const isLoading = ref(false)

// methods
const getProfile = () => {
    axios.get('/profile').then(({ data }) => {
        formData.first_name = data.first_name
        formData.last_name = data.last_name
        formData.number = data.number
        formData.address = data.address
        formData.id = data.id
    }).catch(err => {
        console.log(err);
    }).finally(() => { })
}

const submit = (event) => {
    isLoading.value - true
    let fd = new FormData(event.target)
    fd.append('_method', 'PATCH')
    axios.post('/profile/' + formData.id, fd)
        .then(res => {})
        .catch(err => {
            console.log(err);
        }).finally(() => {
            isLoading.value = false
        })

}

onBeforeMount(() => {
    getProfile()
})

</script>

<template>
    <div class="flex justify-between items-center my-5">
        <div class="text-3xl font-bold">Profile</div>
        <button class="bg-red-500 py-2 px-5 text-white" @click="appStore.Logout">Logout</button>
    </div>
    <hr>
    <form class=" bg-indigo-50 bg-opacity-50 p-5 mt-5" @submit.prevent="submit">
        <div class="flex flex-col gap-5">
            <div class="grid grid-cols-2 gap-3">
                <div class="flex flex-col">
                    <label>First Name</label>
                    <input type="text" class="border border-indigo-500 p-2" v-model="formData.first_name" name="first_name">
                </div>
                <div class="flex flex-col">
                    <label>Last Name</label>
                    <input type="text" class="border border-indigo-500 p-2" v-model="formData.last_name" name="last_name">
                </div>
            </div>
            <div class="flex flex-col">
                <label>Number</label>
                <input type="text" class="border border-indigo-500 p-2" v-model="formData.number" name="number">
            </div>
            <div class="flex flex-col">
                <label>Address</label>
                <textarea name="address" class="border border-indigo-500 p-2" rows="4"
                    v-model="formData.address"></textarea>
            </div>
        </div>
        <hr class="my-3">
        <div class="text-right">
            <button type="submit"
                class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150"
                :class="{ 'cursor-not-allowed': isLoading }" :disabled="isLoading">
                <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                </svg>
                Save<span v-if="isLoading">...</span>
            </button>
        </div>
    </form>
</template>
