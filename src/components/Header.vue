<template>
  <div class="header">
    <div class="left">
        <span style="font-size: 20px"> {{name}} </span>
    </div>
    <div class="right">右</div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// 返回 router 实例。相当于在模板中使用 $router。必须在 setup() 中调用。
import { useRouter } from 'vue-router'

export default {
    name: 'Header',
    setup() {
        // 获取路由实例
        const router = useRouter()
        // 声明路由和 title 对应的键值对
        const pathMap = {
            index: '首页',
            add: '添加商品'
        }
        const state = reactive({
            name: '首页'
        })
        // afterEach 
        //添加一个导航钩子，在每次导航后执行。返回一个删除注册钩子的函数。
        router.afterEach((to) => {
            // console.log('to', to)
            const { id } = to.query
            state.name = pathMap[to.name]
        })
        // 返回了template才可以拿到这个数据
        return {
            // 其实就是将响应式对象转换为普通对象，然后用展开运算符展开再还回去。
            ...toRefs(state)
        }
    }
}
</script>

<style>
.header {
    height: 50px;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
</style>