<script setup>
// components
import SimpleInput from './../inputs/SimpleInput.vue'
import Email from './../inputs/Email.vue'
import Password from './../inputs/Password.vue'

import { reactive, watch } from 'vue'

// props
const props = defineProps({
    formElement: {
        type: Object,
    }
})

watch(() => props.formElement,
    (newElement) => {
        console.log('here')
        inputs.push(newElement)
    }
)

const inputs = reactive([])
</script>

<template>
    <div class="w-100">
        <!-- row -->
        <div class="builder-row flex flex-wrap w-100">
            <div v-for="input in inputs" :key="input.label">
                <SimpleInput v-if="input.label === 'Input'" />
                <Email v-else-if="input.label === 'Email'" />
                <Password v-else-if="input.label === 'Password'" />
            </div>
        </div>
    </div>
</template>