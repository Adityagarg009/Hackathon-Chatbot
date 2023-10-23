import "./assets/style.css"
import { createApp } from 'vue'
import App from './App.vue'
import PhosphorIcons from "@phosphor-icons/vue"

let app = createApp(App)

app.use(PhosphorIcons)

app.mount('#app')
// // import "./assets/style.scss"
// import { createApp } from 'vue'
// import App from './App.vue'
// import PhosphorIcons from "@phosphor-icons/vue"

// createApp(App).mount('#app')
// App.use(PhosphorIcons)
