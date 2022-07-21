import { createRouter, createWebHashHistory } from "vue-router";
import Index from '@/views/Index.vue'

const router = createRouter({
    // 回去的时候用的是hash模式
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Index
        }
    ]
})

export default router