<script setup>
defineProps(['list'])

import ListItem from './ListItem.vue'

</script>

<template>
    <div class="flex flex-col">
        <ListItem v-for="(item, index) in list" :item="item" :key="`item-${item.id}-${index}`" />
    </div>
</template>
