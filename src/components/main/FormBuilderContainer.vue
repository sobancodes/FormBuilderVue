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

watch(() => props.pushCounter, () => pushAtEnd(props.input))
let formBuilders = reactive([[]])

function createNewBuilder(formBuilderIndex) {
    let input = generateInput(props.input)
    input = updateInputCode(input, formBuilderIndex)
    formBuilders.push([input])
}

function pushNewInput(formBuilderIndex) {
    if (props.input != null) {
        let input = generateInput(props.input)
        input = updateInputCode(input, formBuilderIndex, formBuilders[formBuilderIndex].length)
        return formBuilders[formBuilderIndex].push(input)
    }

    pushAtEnd(generateInput())
}

function pushAtEnd(input) {
    const length = formBuilders.length
    const formBuilderIndex = length - 1
    input = updateInputCode(input, formBuilderIndex, formBuilders[formBuilderIndex].length)
    formBuilders[formBuilderIndex].push(input)
}

function updateInputCode(input, formBuilderIndex, formInputIndex = 0, action = 'create') {
    input.generatedNode = input.template
    const prefix = action === 'create' ? input.type : input.label.replaceAll(' ', '_').toLowerCase()
    const inputIdentifier = `${prefix}_${formBuilderIndex}_${formInputIndex}`
    input.generatedNode = input.generatedNode.replace('##placeholder##', `'${input.label}'`)
    input.generatedNode = input.generatedNode.replace('##name##', `'${inputIdentifier}'`)
    input.generatedNode = input.generatedNode.replace('##vmodel##', `'${inputIdentifier}'`)
    emits('codeUpdated', { input, formBuilderIndex, action })
    return input
}

function labelUpdated({ formInputLabel, formInputIndex }, formBuilderIndex) {
    let formBuilder = formBuilders[formBuilderIndex]
    let input = formBuilder[formInputIndex]
    input.label = formInputLabel
    updateInputCode(input, formBuilderIndex, formInputIndex, 'update')
}
</script>
<template>
    <div class="flex flex-col">
        <FormBuilder v-for="(formBuilder, index) in formBuilders" :key="index" :formInputs="formBuilder"
            :pushCounter="pushCounter" @pushNewBuilder="createNewBuilder(index)" @pushNewInput="pushNewInput(index)"
            @onLabelUpdate="labelUpdated($event, index)" />
    </div>
</template>
