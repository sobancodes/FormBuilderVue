<script setup>
import SimpleInput from './../inputs/SimpleInput.vue'
import Email from './../inputs/Email.vue'
import Password from './../inputs/Password.vue'
import InputHolder from '../inputs/InputHolder.vue'
import { reactive, watch } from 'vue'

const emits = defineEmits(['onLabelUpdate'])

const props = defineProps({
    formInputs: Object,
})

let inputs = reactive(props.formInputs)
watch(() => props.formInputs, (newValue) => inputs = newValue)

const handleLabelUpdate = function (label, { formInput, index }) {
    formInput.label = label.value
    emits('onLabelUpdate', { formInputLabel: formInput.label, formInputIndex: index })
}
</script>

<template>
    <!-- hover:border-blue-600 -->
    <div class="formBuilder relative w-full rounded transition-all pb-6 -mt-0 -mx-4 px-4">
        <!-- row -->
        <div class="builder-row flex flex-wrap w-full" v-if="inputs.length >= 1">
            <template v-for="(formInput, index) in inputs" :key="formInput.type">
                <InputHolder :label="formInput.label" v-if="formInput.type === 'text'"
                    @onLabelUpdate="handleLabelUpdate($event, { formInput, index })">
                    <SimpleInput class="w-full" />
                </InputHolder>
                <InputHolder :label="formInput.label" v-else-if="formInput.type === 'email'"
                    @onLabelUpdate="handleLabelUpdate($event, { formInput, index })">
                    <Email class="w-full" />
                </InputHolder>
                <InputHolder :label="formInput.label" v-else-if="formInput.type === 'password'"
                    @onLabelUpdate="handleLabelUpdate($event, { formInput, index })">
                    <Password class="w-full" />
                </InputHolder>
            </template>
        </div>


        <button
            class="bg-purple-50 text-purple-700 font-light rounded-md -mt-0 px-4 py-2 flex items-center space-x-1 cursor-pointer"
            @click="$emit('pushNewInput')" v-else>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <span>
                Add new input
            </span>
        </button>


        <svg v-if="inputs.length >= 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 bottom-7 text-purple-700 cursor-pointer add-same-line text-center hidden addRowIcon absolute -right-2 top-[52%] -translate-y-1/2 animate__animated animate__fadeIn animate__fastest"
            @click="$emit('pushNewInput')">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
        </svg>

        <svg v-if="inputs.length >= 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5  text-purple-700 cursor-pointer pushNewBuilder transition-all text-center hidden addBuilderIcon absolute bottom-0 left-1/2 -translate-x-1/2 animate__animated animate__fadeIn animate__fastest"
            @click="$emit('pushNewBuilder')">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    </div>
</template>

<style>
.formBuilder:hover .addRowIcon,
.formBuilder:hover .addBuilderIcon {
    display: block;
}
</style>