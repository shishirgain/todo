<script setup></script>

<template>
    <div v-for="(i) in 3" class="flex flex-col items-start p-1 border-b gap-3 last:border-b-0">
        <div class="flex gap-2 items-center w-1/2">
            <div class="h-6 w-6 bg-indigo-50"></div>
            <div class="h-6 w-full bg-indigo-50"></div>
        </div>
        <div class="text-sm pl-5 h-12 w-full bg-indigo-50"></div>
    </div>
</template>
