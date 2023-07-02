<script setup>
    defineProps({
        label: String,
        active: Boolean

    })
</script>

<template>
    <li class="cursor-pointer list-none py-2 px-4 overflow-clip rounded-xl xs-mobile:font-normal xs-mobile:text-xs" :class="[active ? '_tab_active' : '']">
        {{ label }} 
    </li>    
</template>