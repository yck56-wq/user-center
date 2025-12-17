import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './access.ts'
import './request.ts'
import { createPinia, type Pinia } from 'pinia'
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

import Antd from 'ant-design-vue';

const pinia: Pinia = createPinia();

app.use(pinia).use(router).use(Antd).mount('#app');



