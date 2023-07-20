<script setup>
import { onBeforeMount, onUnmounted } from "vue"
const emits = defineEmits(['close', 'open'])

onBeforeMount(() => emits('open'))
onUnmounted(() => emits('close'))
</script>
<template>
    <div class="fixed inset-0 bg-indigo-500 bg-opacity-50 flex justify-center items-center">
        <div class=" min-w-[400px] mx-auto bg-white p-3 border">
            <slot></slot>
        </div>
    </div>
</template>
