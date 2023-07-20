<script setup>
defineProps(['item'])

import { useAxios } from '../axios'

const axios = useAxios()

const triggerNote = (note) => {
    let fd = new FormData()
    fd.append('title', note.title)
    fd.append('description', note.description)
    fd.append('done', !!note.done ? false : true)
    fd.append('_method', 'PATCH')
    axios.post('/todos/' + note.id, fd).then(res => {
        note.done = res.data.todo.done
    }).catch(err => {
        console.log(err);
    }).finally(() => { })
}
</script>

<template>
    <div class="flex flex-col items-start p-1 border-b last:border-b-0">
        <div class="flex gap-2 items-center">
            <input type="checkbox" :checked="item.done" name="done" @input="triggerNote(item)">
            <div class="text-indigo-500 whitespace-nowrap">{{ item.title }}</div>
        </div>
        <div class="text-sm pl-5 text-gray-400">{{ item.description }}</div>
    </div>
</template>
