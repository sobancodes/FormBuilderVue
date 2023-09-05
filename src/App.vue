<script setup>
import { reactive, ref } from 'vue'
import CodeTabs from './components/main/CodeTabs.vue';
import FormBuilderContainer from './components/main/FormBuilderContainer.vue';
import SupportedInputs from './components/main/SupportedInputs.vue'
import { useObject } from './composables/useObject'
const { cloneObject } = useObject()

const pushNewInput = ref(0)
let newInput = ref(null)

function pushNewInputElement(input) {
    newInput.value = new Object()
    newInput.value = cloneObject(input, newInput.value)
    pushNewInput.value += 1
}

const updateCode = ref(0)
const formBuilders = ref([])
function updatedCode(codeInputMeta) {
    updateCode.value += 1
    formBuilders.value = codeInputMeta.formBuilders
}
</script>

<template>
    <div class="font-fira xs-mobile:max-w-md md:max-w-5xl mx-auto">
        <header class="lg:mt-40 lg:mb-12 font-roboto">
            <h1 class="text-4xl text-gray-800 font-extrabold mb-4">Automate your forms, Build quicker</h1>
            <h3 class="text-base text-gray-400 font-light">
                With this form builder, you can speed up the boring process of
                creating your next form. Simply create your form in the form builder below and then just copy and paste
                code in to your own project. :)
            </h3>
        </header>
        <div
            class="flex w-full min-h-screen xs-mobile:space-y-12 xs-mobile:flex-col xs-mobile:divide-y md:flex-row md:divide-y-0">
            <div class="md:w-1/2 md:flex-none md:pr-8 lg:pr-12">
                <CodeTabs :updateCode="updateCode" :formBuilders="formBuilders" />
            </div>
            <div class="md:w-1/2 md:flex-none xs-mobile:py-8 md:py-0 md:pl-8 lg:pl-12">
                <SupportedInputs @onClick="pushNewInputElement" />
                <FormBuilderContainer :pushCounter="pushNewInput" :input="newInput" @codeUpdated="updatedCode" />
            </div>
        </div>
    </div>
</template>