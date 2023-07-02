<script setup>
import Tabs from './../application/Tabs.vue'
import ScriptCode from './ScriptCode.vue'
import TemplateCode from './TemplateCode.vue'

const tabs = [{
    label: 'Template',
    active: true,
}, {
    label: 'Script',
    active: false,
}]

function onTabClick(tab) {
    
}

</script>

<template>
    <!-- tabs -->
    <div class="flex justify-center">
        <Tabs @onTabClick="onTabClick" :tabs="tabs" class="inline-flex items-center m-3" />
    </div>
    <!-- template code -->
    <TemplateCode />
    <!-- script code -->
    <ScriptCode />
</template>