<script setup>
import { ref } from 'vue'
import { useAxios } from '../axios'
import ListView from './ListView.vue'
const axios = useAxios()

const list = ref(await axios.get('/todos').then(res => res.data))

</script>
<template>
    <div>
        <div>
            <!-- <div class="text-center text-gray-500 bg-indigo-50">Todo's</div> -->
            <ListView :list="list.filter(item => !item.done)" />
        </div>
        <div class="mt-6">
            <div class="text-gray-400" v-if="!!list.filter(item => item.done).length">[Checked]</div>
            <!-- <div class="text-center text-gray-500 bg-indigo-50">Done</div> -->
            <ListView :list="list.filter(item => item.done)" />
        </div>
    </div>
</template>
