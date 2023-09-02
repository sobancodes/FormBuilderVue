<script setup>
import { ref, watch } from 'vue';
import CodeHighlighter from './CodeHighlighter.vue'
const code = ref(`// please select inputs`)

const props = defineProps({
    formBuilders: Array,
    updateCode: Number,
})

watch(() => props.updateCode, (newValue, OldValue) => {
    code.value = ''
    props.formBuilders.forEach((formBuilder) => {
        formBuilder.forEach(formElement => {
            code.value +=
                `<div class="container">
    <label for="${formElement.name}"></label>
    ${formElement.generatedNode}
</div>\n\n`
        })
    })
})

</script>

<template>
    <CodeHighlighter :code="code" />
</template>