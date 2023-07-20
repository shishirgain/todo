<script setup>
import { ref, reactive } from 'vue'
import { useApplication } from '../store/application'

const appStore = useApplication()

const formData = reactive({})

const submit = () => {
    let fd = new FormData()
    for(let key in formData){
        fd.append(key, formData[key])
    }
    appStore.Login(fd)
}
</script>
<template>
    <form @submit.prevent="submit" class="flex flex-col gap-3 mx-auto max-w-[400px] mt-[200px]">
        <div class="text-2xl">Login to Application</div>
        <div class="p-5 flex flex-col gap-5 bg-indigo-50">
            <div class="flex flex-col">
                <label for="email">Email</label>
                <input type="email" v-model="formData.email" name="email" class="border p-2" placeholder="example@demo.com" required>
            </div>
            <div class="flex flex-col">
                <label for="password">Password</label>
                <input type="password" v-model="formData.password" name="password" class="border p-2" placeholder="Min: 6" required>
            </div>
            <hr>
            <button type="submit" class="bg-green-500 hover:bg-green-400 p-2 text-white">Login</button>
        </div>
    </form>
</template>
