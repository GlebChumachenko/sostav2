import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import app from "@/App";
createApp(App).mount('#app')
app.use(router)
