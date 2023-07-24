import { createRouter, createWebHashHistory } from "vue-router"

// layout
import Default from '../layout/Default.vue'
import Guest from '../layout/Guest.vue'

// views
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'

// const Home = () => import('../views/Home.vue')
// const Profile = () => import('../views/Profile.vue')

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'root',
            component: Default,
            children: [
                {
                    path: '',
                    name: 'home',
                    meta: { auth: true },
                    component: Home
                }
            ]
        },
        {
            path: '/user',
            name: 'user',
            component: Default,
            children: [
                {
                    path: 'profile',
                    name: 'user/profile',
                    meta: { auth: true },
                    component: Profile
                }
            ]
        },
        {
            path: '/auth',
            name: 'auth',
            component: Guest,
            children: [
                {
                    path: 'login',
                    name: 'auth/login',
                    component: Login
                },
                {
                    path: 'registration',
                    name: 'auth/registration',
                    component: Registration
                },
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    let token = !!localStorage.token
    if (to.name !== 'auth/login' && !token) next({ name: 'auth/login' })
    else next()
  })

export default router
