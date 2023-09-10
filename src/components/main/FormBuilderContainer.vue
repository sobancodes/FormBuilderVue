<script setup>
import FormBuilder from './FormBuilder.vue'
import { watch, reactive, defineEmits, ref, onMounted } from 'vue'
import { useInputGenerator } from './../../composables/useInputGenerator'
const { generateInput } = useInputGenerator()

const emits = defineEmits(['newInput', 'codeUpdated'])

const props = defineProps({
    pushCounter: Number,
    input: Object,
})

const inputCount = ref(props.pushCounter)
watch(() => props.pushCounter, () => pushNewInput(formBuilders.length - 1))
let formBuilders = reactive([[]])

function createNewBuilder(formBuilderIndex) {
    inputCount.value += 1
    let input = generateInput(props.input)
    const sameElCount = sameEl(input)
    input = updateCode(sameElCount, input, formBuilderIndex)
    formBuilders.splice(formBuilderIndex + 1, 0, [input])
}

function pushFormInput(input, formBuilderIndex) {
    inputCount.value += 1
    input = generateInput(input)
    const sameElCount = sameEl(input)
    input = updateCode(sameElCount, input, formBuilderIndex)
    formBuilders[formBuilderIndex].push(input)
    return input
}

function pushNewInput(formBuilderIndex) {
    const input = props.input == null ? generateInput() : props.input
    pushFormInput(input, formBuilderIndex)
}

function sameEl(input) {
    let foundElements = []
    let foundElementsTotal = 0

    formBuilders.forEach(formBuilder => {
        foundElements = formBuilder.filter(formEl => formEl.label === input.label)
        foundElementsTotal += foundElements.length
    })

    return foundElementsTotal
}

function updateCode(sameElCount, input, formBuilderIndex, action = 'create') {
    input.generatedNode = input.template
    const sanitizedInput = action === 'create' ? input.type : input.label.replaceAll(' ', '_').toLowerCase()
    const inputSuffix = sameElCount !== 0 && sameElCount !== 1 ? '_' + (sameElCount - 1) : ''
    const inputIdentifier = sanitizedInput + inputSuffix
    input.generatedNode = input.generatedNode.replace('##placeholder##', `'${input.label}'`)
    input.generatedNode = input.generatedNode.replace('##name##', `'${inputIdentifier}'`)
    input.generatedNode = input.generatedNode.replace('##vmodel##', `'${inputIdentifier}'`)
    input.name = inputIdentifier
    setTimeout(() => emits('codeUpdated', { input, formBuilderIndex, action, formBuilders })) // wait for formBuilders to get updated
    return input
}

function labelUpdated({ formInputLabel, formInputIndex }, formBuilderIndex) {
    let formBuilder = formBuilders[formBuilderIndex]
    let input = formBuilder[formInputIndex]
    input.label = formInputLabel
    const sameECount = sameEl(input)
    updateCode(sameECount, input, formBuilderIndex, 'update')
}

</script>
<template>
    <div class="flex flex-col">
        <FormBuilder v-for="(formBuilder, index) in formBuilders" :key="index" :formInputs="formBuilder"
            :pushCounter="pushCounter" @pushNewBuilder="createNewBuilder(index)" @pushNewInput="pushNewInput(index, $event)"
            @onLabelUpdate="labelUpdated($event, index)" />
    </div>
</template>
