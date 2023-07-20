<script setup>
import { useApplication } from '../store/application'
const appStore = useApplication()
const user = appStore.user
</script>

<template>
    <div>Name: <span>{{ user.name }}</span></div>
    <button class="bg-red-500 p-3" @click="appStore.Logout">Logout</button>
</template>
