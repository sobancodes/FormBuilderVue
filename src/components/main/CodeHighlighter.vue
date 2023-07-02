<script setup>
defineProps({
    code: String,
})
</script>

<template>
    <div class="max-w-sm xs-mobile:w-[320px] mx-auto">
        <highlightjs :code="code" />
    </div>
</template>

<style>
.hljs {
    border-radius: 5px !important;
}
</style>