<script setup>
// import Email from '../inputs/Email.vue';
// import Password from '../inputs/Password.vue';
// import SimpleInput from '../inputs/SimpleInput.vue';
const supportedInputs = [
    {
        name: 'Input',
        icon: 'dynamic_form'
    },
    {
        name: 'Email',
        icon: 'mail'
    },
    {
        name: 'Password',
        icon: 'password'
    }
]
</script>

<template>
    <h2 class="font-bold text-3xl text-gray-700 xs-mobile:font-semibold xs-mobile:text-base">
        Supported Inputs
    </h2>

    <div class="py-5 px-3 supported-inputs">
        <div class="_default_grid mx-3 flex-wrap">
            <button v-for="supportedInput in supportedInputs" :key="supportedInput.name" type="button"
                class="flex border space-x-1 px-4 py-1 rounded-md mx-1 xs-mobile:my-2.5 sm:my-1">
                <span class="material-symbols-outlined">{{ supportedInput.icon }}</span>
                <span>{{ supportedInput.name }}</span>
            </button>
        </div>
    </div>
</template>

<style>
.supported-inputs input {
    cursor: pointer;
    min-width: 250px;
}
</style>