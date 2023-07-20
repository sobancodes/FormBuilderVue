<script setup>
import CodeHighlighter from './CodeHighlighter.vue'
const code = `<h1>Hello World!</h1>`
</script>

<template>
    <CodeHighlighter :code="code" />
</template>