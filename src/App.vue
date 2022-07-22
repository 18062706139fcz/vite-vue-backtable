<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { toRefs, reactive } from 'vue';
import { useRouter } from 'vue-router';
// 路由监听
import { localGet, pathMap } from './utils';
export default {
    name: 'App',
    components:{
      Header,
      Footer
    },
    setup() {
      const noMenu = ['/login']
      const router = useRouter()
      const state = reactive({
        showMenu: true,
      })
      router.beforeEach((to) => {
        state.showMenu = !noMenu.includes(to.path)
      })
      // 路由监听函数
      router.beforeEach((to, from, next) => {
        if(to.path == '/login') {
          next()
        } else {
          if(!localGet('token')) {
            next({path: '/login'})
          } else {
            next()
          }
        }
        state.showMenu = !noMenu.includes(to.path)
        document.title = pathMap[to.name]
      })
      return {
        ...toRefs(state)
      }
    }
}
</script>

<template>
<div class="layout">
    <el-container  v-if="showMenu" class="container">
        <el-aside class="aside">
            <!-- 系统名称➕logo -->
            <div class="head">
                <div>
                    <img src="//s.weituibao.com/1582958061265/mlogo.png" alt="logo">
                    <span>Vue3 admin</span>
                </div>
            </div>
            <!-- 一条分割线 -->
            <!-- 通过:router加载路由属性 -->
            <div class="line" />
            <el-menu 
            background-color="#222832" 
            text-color="#fff"
            :router = "true"
            >
                <!-- 一级栏目 -->
                <el-submenu index="1">
                    <template #title>
                        <span>Dashboard</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/"><i class="el-icon-data-line" />首页</el-menu-item>
                        <el-menu-item index="/add"><i class="el-icon-data-line" />添加商品</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container class="content">
            <Header></Header>
            <div class="main">
              <router-view/>
            </div>
            <Footer></Footer>
        </el-container>
    </el-container>
    <el-container v-else class="container">
      <router-view></router-view>
    </el-container>
</div>
</template>

<style scoped>
.layout {
    min-height: 100vh;
    background-color: #ffffff;
}

.container {
    height: 100vh;
}

.aside {
    width: 200px !important;
    background-color: #222832
}

.head {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
}

.head>div {
    display: flex;
    align-items: center;
}

.head img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.head span {
    font-size: 20px;
    color: #ffffff;
}

.line {
    border-top: 1px solid hsla(0, 0%, 100%, .05);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  height: calc(100vh - 100px);
  overflow: auto;
  padding: 10px
}
</style>

<style>
body {
    padding: 0;
    margin: 0;
}

.el-menu {
    border-right: none !important;
}

.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, .05);
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}
.el-submenu:first-child {
  border-top: none;
}
.el-submenu [class^="el-icon-"] {
  vertical-align: -1px!important;
}
a {
  color: #409eff;
  text-decoration: none;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
.el-popper__arrow {
  display: none;
}
</style>
