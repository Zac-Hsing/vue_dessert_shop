import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'vue-toast-notification/dist/theme-sugar.css'; 
import VueToast from 'vue-toast-notification';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(ElementPlus)
app.use(pinia);
app.use(router)
app.use(VueToast);
app.mount('#app')
 