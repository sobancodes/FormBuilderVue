import { createApp } from 'vue'
import './normalize.css'
import './style.css'
import './extended-tailwind.css'
import 'animate.css'
import './animate-overhaul.css'
import App from './App.vue'

// Prism.js for code highlight
import 'highlight.js/lib/common'
import hljsVuePlugin from "@highlightjs/vue-plugin"
import 'highlight.js/styles/atom-one-dark.css'

createApp(App)
    .use(hljsVuePlugin)
    .mount('#app')
