import { createApp } from 'vue'
import 'material-symbols'

import 'animate.css'
import './normalize.css'
import './style.css'
import './animate-overhaul.css'
import './extended-tailwind.css'

import App from './App.vue'

// Prism.js for code highlight
import 'highlight.js/lib/common'
import hljsVuePlugin from "@highlightjs/vue-plugin"
import 'highlight.js/styles/atom-one-dark.css'

createApp(App)
    .use(hljsVuePlugin)
    .mount('#app')
