<script setup>
import CodeTabs from './components/main/CodeTabs.vue';
import FormBuilderContainer from './components/main/FormBuilderContainer.vue';
import SupportedInputs from './components/main/SupportedInputs.vue'
import { useInput } from './composables/useInput'

const { simpleInput } = useInput()
import { ref } from 'vue'

const pushNewInput = ref(0)
let newInput = ref(null)

function pushNewInputElement(input) {
    newInput.value = input
    pushNewInput.value += 1
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
                <SupportedInputs @onClick="pushNewInputElement" />
                <FormBuilderContainer :pushCounter="pushNewInput" :input="newInput"
                    @newInput="pushNewInputElement(simpleInput)" />
            </div>
        </div>
    </div>
</template>