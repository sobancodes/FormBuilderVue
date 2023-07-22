<script setup>
const emits = defineEmits(['newInput'])
import FormBuilder from './FormBuilder.vue'
import { watch, reactive, defineEmits, ref, onMounted } from 'vue'
import { useInputGenerator } from './../../composables/useInputGenerator'
const { generateInput } = useInputGenerator()

const props = defineProps({
    pushCounter: Number,
    input: Object,
})

watch(() => props.pushCounter, () => pushAtEnd(props.input))
let formBuilders = reactive([[]])

function createNewBuilder() {
    formBuilders.push([generateInput(props.input)])
}

function pushNewInput(index) {
    if (props.input != null) {
        return formBuilders[index].push(generateInput(props.input))
    }

    pushAtEnd(generateInput())
}

function pushAtEnd(input) {
    const length = formBuilders.length
    formBuilders[length - 1].push(input)
}

</script>
<template>
    <div class="flex flex-col">
        <FormBuilder v-for="(formBuilder, index) in formBuilders" :key="index" :formInputs="formBuilder"
            :pushCounter="pushCounter" @pushNewBuilder="createNewBuilder" @pushNewInput="pushNewInput(index)" />
    </div>
</template>
