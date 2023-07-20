<script setup>
const emits = defineEmits(['newInput'])
import FormBuilder from './FormBuilder.vue'
import { watch, reactive, defineEmits, ref, onMounted } from 'vue'
import { useInput } from '../../composables/useInput';
const { makeNewInput } = useInput()
import { useCodeStore } from './../../stores/CodeStore'
const codeStore = useCodeStore()

const props = defineProps({
    pushCounter: Number,
    input: Object,
})

watch(() => props.pushCounter, () => {
    const length = formBuilders.length
    formBuilders[length - 1].push(props.input)
})

const newInput = ref(null)
watch(() => props.input, (newValue) => newInput.value = makeNewInput(newValue))

let formBuilders = reactive([
    []
])

function createNewBuilder() {
    formBuilders.push([makeNewInput(newInput.value)])
}

function pushNewInput(index) {
    if (newInput.value != null) {
        return formBuilders[index].push(makeNewInput(newInput.value))
    }

    emits('newInput')
}
</script>
<template>
    <div class="flex flex-col">
        <FormBuilder v-for="(formBuilder, index) in formBuilders" :key="index" :formInputs="formBuilder"
            :pushCounter="pushCounter" @pushNewBuilder="createNewBuilder" @pushNewInput="pushNewInput(index)" />
    </div>
</template>
