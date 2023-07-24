<script setup>
import { ref, onMounted } from 'vue'
import Todos from '../components/Todos.vue'
import TodosSkeleton from '../components/TodosSkeleton.vue'
import Modal from '../components/Modal.vue'

const isModalOpen = ref(false)

// methods
const open = () => {
}
const close = () => {
}

const submit = (e) => {
    let fd = new FormData(e.target)
    axios.post('/todos', fd).then(res => {
        isModalOpen.value = false
        getTodos()
    }).catch(err => {
        console.log(err)
    }).finally(() => { })
}

</script>
<template>
    <div class="flex justify-between my-3 items-center">
        <div class="flex items-center gap-2">
            <div class="text-2xl">List</div>
            <div class="text-gray-400">[Unchecked]</div>
        </div>
        <button class="bg-indigo-500 px-5 py-1 text-white" @click="isModalOpen = true">+ Todo</button>
    </div>
    <!-- <hr> -->
    <Suspense>
        <template #default>
            <Todos />
        </template>
        <template #fallback>
            <TodosSkeleton/>
        </template>
    </Suspense>
    <Modal v-if="isModalOpen" @close="close" @open="open">
        <div class="w-[400px]">
            <div class="flex justify-between items-center">
                <p class=" text-2xl">Create Todo's</p>
                <button class="bg-red-500 w-8 h-8 hover:bg-red-400 flex justify-center items-center text-white"
                    @click="isModalOpen = false">
                    <small>X</small></button>
            </div>
            <div class="mt-6">
                <form class="flex flex-col gap-3" @submit.prevent="submit">
                    <div class="flex flex-col">
                        <label for="title">Title</label>
                        <input type="text" name="title" class="border border-indigo-500 p-2" placeholder="Title Min:3"
                            required>
                    </div>
                    <div class="flex flex-col">
                        <label for="description">Description</label>
                        <textarea name="description" class="border border-indigo-500 p-2" cols="30" rows="5"
                            placeholder="Description Max: 300" required></textarea>
                    </div>
                    <hr>
                    <button type="submit" class="bg-indigo-500 hover:bg-indigo-400 text-white p-3">Create</button>
                </form>
            </div>
        </div>
    </Modal>
</template>
