<script setup>
import { ref, watch } from 'vue';
import CodeHighlighter from './CodeHighlighter.vue'
const code = ref(`// please select text inputs`)

const props = defineProps({
    formBuilders: Array,
    updateCode: Number,
})

watch(() => props.updateCode, (newValue, OldValue) => {
    code.value = '<form>\n'
    props.formBuilders.forEach((formBuilder) => {
        code.value += ' <div class="builder-row grid grid-cols-2 gap-2 w-full">\n'
        formBuilder.forEach(formElement => {
            code.value +=
                `   <div class="container">
        <label for="${formElement.name}"></label>
        ${formElement.generatedNode}
    </div>\n`
        })
        code.value += ' </div>'
    })
    code.value += '\n</form>'
})

</script>

<template>
    <CodeHighlighter :code="code" />
</template>