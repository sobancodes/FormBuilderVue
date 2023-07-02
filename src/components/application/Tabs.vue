<script setup>
import Tab from './Tab.vue'

defineProps({
    tabs: Array,
})
</script>

<template>
    <ul class="flex rounded-xl overflow-clip p-1 bg-gray-100 space-x-1">
        <Tab v-for="tab in tabs" :label="tab.label" :active="tab.active" @click.native="$emit('onTabClick', tab)" />
    </ul>
</template>