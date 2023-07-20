<script setup>
import { onBeforeMount } from 'vue'
import { useApplication } from '../store/application'

const appStore = useApplication()

onBeforeMount(() => {
    appStore.Me()
})
</script>
<template>
    <div v-if="appStore.loading" class="flex justify-center items-center w-screen h-screen">Application loading...</div>
    <template v-else>
        <nav class="bg-indigo-100 p-3">
            <div class="container flex justify-between items-center mx-auto max-w-[800px]">
                <RouterLink :to="{ name: 'home' }"><h3 class="text-2xl font-bold text-indigo-500 hover:text-indigo-400">Todo's</h3></RouterLink>
                <div class="flex gap-2 items-center">
                    <router-link :to="{ name: 'user/profile' }" class="bg-indigo-500 hover:bg-indigo-400 w-8 h-8 p-3 rounded-full text-white flex justify-center items-center">
                         <small>{{ appStore.user.name.split(' ')[0].split('').filter((item, index) => index < 2).map(i => i.toUpperCase()).join('')}}</small>
                    </router-link>
                </div>
            </div>
        </nav>
        <div class="container mx-auto max-w-[800px]">
            <RouterView />
        </div>
    </template>
</template>
