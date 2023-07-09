<script setup>
// components
import SimpleInput from './../inputs/SimpleInput.vue'
import Email from './../inputs/Email.vue'
import Password from './../inputs/Password.vue'
import { reactive } from 'vue'

const props = defineProps({
    formInputs: Object,
})

const inputs = reactive(props.formInputs)
</script>

<template>
    <!-- hover:border-blue-600 -->
    <div class="formBuilder relative w-full pt-4 border-2 border-transparent rounded transition-all">
        <!-- row -->
        <div class="builder-row flex flex-wrap w-full" v-if="inputs.length >= 1">
            <template v-for="formInput in inputs" :key="formInput.label">
                <SimpleInput class="w-full" v-if="formInput.label === 'Input'" />
                <Email class="w-full" v-else-if="formInput.label === 'Email'" />
                <Password class="w-full" v-else-if="formInput.label === 'Password'" />
            </template>
        </div>

        <button class="mb-4 px-2 flex items-center space-x-2 cursor-pointer" @click="$emit('pushNewInput')" v-else>
            <span class="text-sm font-bold">add text input</span>
        </button>

        <span @click="$emit('pushNewInput')"
            class="hidden addRowIcon text-sm text-white absolute material-symbols-outlined -right-[15px] top-1/2 cursor-pointer bg-blue-600 rounded-r-3xl -translate-y-1/2 animate__animated animate__fadeIn animate__fastest">
            add
        </span>
        <span @click="$emit('pushNewBuilder')"
            class="w-5 text-center hidden addBuilderIcon text-sm text-white absolute material-symbols-outlined -bottom-[15px] left-1/2 cursor-pointer bg-blue-600 rounded-b-3xl -translate-x-1/2 animate__animated animate__fadeIn animate__fastest">
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