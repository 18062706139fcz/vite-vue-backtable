import { createApp } from 'vue'
import App from './App.vue'
// 无法个例引入，有些奇奇怪怪的错误。
import ElementPlus from 'element-plus'
import router from '@/router'

import 'element-plus/lib/theme-chalk/index.css';

import '~/theme/theme/index.css'

const app = createApp(App)

app.use(router)

app.use(ElementPlus)

app.mount('#app')