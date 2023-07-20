<script setup>
import CodeHighlighter from './CodeHighlighter.vue'
const code = `console.log('Hello World')`
</script>

<template>
    <CodeHighlighter :code="code" />
</template>