<script setup>
import Email from '../inputs/Email.vue';
import Password from '../inputs/Password.vue';
import SimpleInput from '../inputs/SimpleInput.vue';

</script>

<template>
    <h2 class="font-bold text-3xl text-gray-700 xs-mobile:font-normal xs-mobile:text-base xs-mobile:text-center">
        Here are all supported inputs
    </h2>

    <div class="py-5 px-3 supported-inputs">
        <div class="_default_grid xs-mobile:flex-col">
            <SimpleInput />
            <Email />
            <Password />
        </div>
    </div>
</template>

<style>
.supported-inputs input {
    cursor: pointer;
    min-width: 250px;
}
</style>