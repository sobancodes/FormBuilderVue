<script setup>
import FormBuilder from './FormBuilder.vue'
import { watch, reactive, defineEmits } from 'vue'
import { useInputGenerator } from './../../composables/useInputGenerator'
const { generateInput } = useInputGenerator()

const emits = defineEmits(['newInput', 'codeUpdated'])

const props = defineProps({
    pushCounter: Number,
    input: Object,
})

watch(() => props.pushCounter, () => pushAtEnd(props.input))
let formBuilders = reactive([])

function pushNewInput(index) {
    let input = props.input != null ? props.input : null
    input = generateInput()
    input = updateInputCode(input, index)
    formBuilders.splice(index, 0, input)
}

function pushAtEnd(input) {
    input = updateInputCode(input, formBuilders.length)
    formBuilders.push(input)
}

function updateInputCode(input, formInputIndex, action = 'create') {
    input.generatedNode = input.template
    const prefix = action === 'create' ? input.type : input.label.replaceAll(' ', '_').toLowerCase()
    // const inputIdentifier = `${prefix}_${formInputIndex}`
    const inputIdentifier = prefix
    input.generatedNode = input.generatedNode.replace('##placeholder##', `'${input.label}'`)
    input.generatedNode = input.generatedNode.replace('##name##', `'${inputIdentifier}'`)
    input.generatedNode = input.generatedNode.replace('##vmodel##', `'${inputIdentifier}'`)
    input.name = inputIdentifier
    setTimeout(() => emits('codeUpdated', { input, action, formBuilders })) // wait for formBuilders to get updated
    return input
}

function labelUpdated({ formInputLabel, formInputIndex }) {
    let input = formBuilders[formInputIndex]
    input.label = formInputLabel
    updateInputCode(input, formInputIndex, 'update')
}
</script>
<template>
    <div class="flex flex-col">
        <FormBuilder :formInputs="formBuilders" :pushCounter="pushCounter" @pushNewInput="pushNewInput"
            @onLabelUpdate="labelUpdated($event)" />
    </div>
</template>
