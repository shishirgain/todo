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
    <div class="flex gap-2 p-1 border-b last:border-b-0">
        <input type="checkbox" :checked="item.done" name="done" @input="triggerNote(item)">
        <div class="flex items-center gap-2">
            <div class="text-indigo-500">{{ item.title }}</div>
            <div class="text-sm text-gray-400">{{ item.description }}</div>
        </div>
    </div>
</template>
