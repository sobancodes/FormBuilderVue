<script setup>
defineProps({
    code: String,
})
</script>

<template>
    <!-- max-w-sm xs-mobile:w-[240px] mobile:w-[280px] sm:w-[300px] lg:w-[420px] -->
    <div class="w-full mx-auto">
        <highlightjs :code="code" />
    </div>
</template>

<style>
.hljs {
    border-radius: 5px !important;
    max-height: 500px;
}
</style>