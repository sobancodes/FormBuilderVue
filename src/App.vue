<script setup>
import CodeTabs from './components/main/CodeTabs.vue';
import FormBuilder from './components/main/FormBuilder.vue'
import SupportedFormElements from './components/main/SupportedFormElements.vue'

</script>

<template>
    <div class="font-fira">
        <div class="flex w-full min-h-screen xs-mobile:flex-col xs-mobile:divide-y">
            <div class="">
                <CodeTabs />
            </div>
            <div class="_defaults !px-2">
                <!-- supported elements -->
                <SupportedFormElements />
                <!-- form builder itself -->
                <!-- <FormBuilder /> -->
            </div>
        </div>
    </div>
</template>