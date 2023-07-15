<script setup>
import FormBuilder from './FormBuilder.vue'
import { watch, reactive, defineEmits } from 'vue'
// import { useInput } from './../../composables/useInput'
const emits = defineEmits(['newInput'])

const props = defineProps({
    pushCounter: Number,
    input: Object,
})

watch(() => props.pushCounter, () => {
    const length = formBuilders.length
    formBuilders[length - 1].push(props.input)
})

let formBuilders = reactive([
    []
])

function createNewBuilder(index) {
    formBuilders.push([props.input])
}

function pushNewInput(index) {
    if (props.input != null) {
        formBuilders[index].push(props.input)
    }

    emits('newInput')
}

</script>
<template>
    <div class="flex flex-col pt-4">
        <FormBuilder v-for="(formBuilder, index) in formBuilders" :key="index" :formInputs="formBuilder"
            :pushCounter="pushCounter" @pushNewBuilder="createNewBuilder(index)" @pushNewInput="pushNewInput(index)" />
    </div>
</template>
