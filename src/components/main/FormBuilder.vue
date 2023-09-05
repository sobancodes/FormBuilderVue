<script setup>
import SimpleInput from './../inputs/SimpleInput.vue'
import Email from './../inputs/Email.vue'
import Password from './../inputs/Password.vue'
import InputHolder from '../inputs/InputHolder.vue'
import { reactive, ref, watch } from 'vue'

const emits = defineEmits(['onLabelUpdate'])

const props = defineProps({
    formInputs: Object,
})

let inputs = reactive([])
let formInputKey = ref(0)

watch(() => props.formInputs, (newValue) => {
    inputs = newValue
    formInputKey.value += 1
}, { immediate: true, deep: true })

const handleLabelUpdate = function (label, { formInput, index }) {
    formInput.label = label.value
    emits('onLabelUpdate', { formInputLabel: formInput.label, formInputIndex: index })
}
</script>

<template>
    <!-- hover:border-blue-600 -->
    <div class="formBuilder relative w-full border-2 border-transparent rounded transition-all">
        <!-- row -->
        <div class="builder-row flex w-full flex-wrap -mt-8" v-if="inputs.length >= 1">
            <template v-for="(formInput, index) in inputs" :key="formInputKey">
                <div class="relative pt-4 form-builder">
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

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 absolute right-3 bottom-3 text-purple-700 cursor-pointer add-same-line"
                        @click="$emit('pushNewInput', index + 1)">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                </div>
            </template>
        </div>

        <button
            class="bg-purple-50 text-purple-700 font-light rounded-md mb-4 px-4 py-2 flex items-center space-x-1 cursor-pointer"
            @click="$emit('pushNewInput', 0)" v-else>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <span>
                Add new input
            </span>
        </button>
    </div>
</template>

<style>
.formBuilder:hover .addRowIcon,
.formBuilder:hover .addBuilderIcon {
    display: block;
}
</style>