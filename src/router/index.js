import { createRouter, createWebHashHistory } from "vue-router";
import Index from '@/views/Index.vue'
// 路径出错直接寄
import AddGood from '@/views/AddGood.vue'

const router = createRouter({
    // 回去的时候用的是hash模式
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name:'index',
            component: Index
        },
        {
            path: '/add',
            name: 'add',
            component: AddGood
        }
    ]
})

export default router