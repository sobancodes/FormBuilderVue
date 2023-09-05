<script setup>
import { watch, ref, reactive } from 'vue';
import CodeHighlighter from './CodeHighlighter.vue'
const code = ref(`select inputs to get started`)

const props = defineProps({
    formBuilders: Array,
    updateCode: Number,
})

const formObject = ref({})

watch(() => props.updateCode, (newValue, OldValue) => {
    formObject.value = {}

    if(props.formBuilders.length == 0) {
        return
    }

    props.formBuilders.forEach((input) => {
        formObject.value[input.name] = ''
    })

    code.value = JSON.stringify(formObject.value, null, 2) // pretty print
}, { immediate: true })

</script>

<template>
    <CodeHighlighter :code="code" />
</template>