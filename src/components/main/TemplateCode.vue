<script setup>
import { ref, watch } from 'vue';
import CodeHighlighter from './CodeHighlighter.vue'
const code = ref(`// please select inputs`)

const props = defineProps({
    formBuilders: Array,
    updateCode: Number,
})

watch(() => props.updateCode, (newValue, OldValue) => {
    if (props.formBuilders.length == 0) {
        return
    }

    code.value = ''
    
    props.formBuilders.forEach((formElement) => {
        code.value +=
            `<div class="container">
    <label for="${formElement.name}"></label>
    ${formElement.generatedNode}
</div>\n\n`
    })
}, { immediate: true })

</script>

<template>
    <CodeHighlighter :code="code" />
</template>