<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
    name: 'App'
}
</script>

<template>
<div class="layout">
    <el-container class="container">
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
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container class="content">
            <div class="main">
              <router-view/>
            </div>
        </el-container>
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
  height: 100vh;
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
