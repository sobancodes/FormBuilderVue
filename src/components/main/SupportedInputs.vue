<script setup>

const inputs = [
    {
        label: 'Input',
        icon: 'dynamic_form'
    },
    {
        label: 'Email',
        icon: 'mail'
    },
    {
        label: 'Password',
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
            <button v-for="input in inputs" :key="input.label"
                @click="$emit('onClick', input)" type="button"
                class="flex border space-x-1 px-4 py-1 rounded-md mx-1 xs-mobile:my-2.5 sm:my-1">
                <span class="material-symbols-outlined">{{ input.icon }}</span>
                <span>{{ input.label }}</span>
            </button>
        </div>
    </div>
</template>