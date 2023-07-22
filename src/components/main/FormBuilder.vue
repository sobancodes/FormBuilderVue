<script setup>
import SimpleInput from './../inputs/SimpleInput.vue'
import Email from './../inputs/Email.vue'
import Password from './../inputs/Password.vue'
import InputHolder from '../inputs/InputHolder.vue'
import { reactive } from 'vue'

const emits = defineEmits(['onLabelUpdate'])

const props = defineProps({
    formInputs: Object,
})

const inputs = reactive(props.formInputs)

const updateLabel = function (label, input) {
    input.label = label.value
    emits('onLabelUpdate', input.label)
}
</script>

<template>
    <!-- hover:border-blue-600 -->
    <div class="formBuilder relative w-full border-2 border-transparent rounded transition-all">
        <!-- row -->
        <div class="builder-row flex flex-wrap w-full" v-if="inputs.length >= 1">
            <template v-for="formInput in inputs" :key="formInput.type">
                <InputHolder :label="formInput.label" v-if="formInput.type === 'text'"
                    @onLabelUpdate="updateLabel($event, formInput)">
                    <SimpleInput class="w-full" />
                </InputHolder>
                <InputHolder :label="formInput.label" v-else-if="formInput.type === 'email'"
                    @onLabelUpdate="updateLabel($event, formInput)">
                    <Email class="w-full" />
                </InputHolder>
                <InputHolder :label="formInput.label" v-else-if="formInput.type === 'password'"
                    @onLabelUpdate="updateLabel($event, formInput)">
                    <Password class="w-full" />
                </InputHolder>
            </template>
        </div>

        <button
            class="border-gray-300 font-light border text-gray-700 rounded-md mb-4 px-4 py-1.5 flex items-center space-x-1 cursor-pointer"
            @click="$emit('pushNewInput')" v-else>
            <span class="material-symbols-outlined">
                add_circle
            </span>
            <span>
                Add new input
            </span>
        </button>

        <span @click="$emit('pushNewInput')"
            class="w-5 text-center hidden addRowIcon text-sm text-white absolute material-symbols-outlined -right-[10px] top-1/2 cursor-pointer bg-blue-600 rounded-md -translate-y-1/2 animate__animated animate__fadeIn animate__fastest">
            add
        </span>
        <span @click="$emit('pushNewBuilder')"
            class="w-5 text-center hidden addBuilderIcon text-sm text-white absolute material-symbols-outlined bottom-0 left-1/2 cursor-pointer bg-blue-600 rounded-md -translate-x-1/2 animate__animated animate__fadeIn animate__fastest">
            add
        </span>
    </div>
</template>

<style>
.formBuilder:hover .addRowIcon,
.formBuilder:hover .addBuilderIcon {
    display: block;
}
</style>