<script setup>
import CodeTabs from './components/main/CodeTabs.vue';
import FormBuilder from './components/main/FormBuilder.vue'
import SupportedInputs from './components/main/SupportedInputs.vue'

import { ref } from 'vue'
let clickedInput = ref({})
function pushSelectedElement(input) {
    clickedInput.value = input
}
</script>

<template>
    <div class="font-fira xs-mobile:max-w-md md:max-w-5xl mx-auto p-4">
        <div
            class="flex w-full min-h-screen xs-mobile:space-y-12 xs-mobile:flex-col xs-mobile:divide-y md:flex-row md:divide-y-0 md:divide-x md:items-center">
            <div class="md:w-1/2 md:flex-none md:px-8 lg:px-12">
                <CodeTabs />
            </div>
            <div class="md:w-1/2 md:flex-none xs-mobile:py-8 md:py-0 md:px-8 lg:px-12">
                <SupportedInputs @onClick="pushSelectedElement" />
                <FormBuilder :formElement="clickedInput" />
            </div>
        </div>
    </div>
</template>