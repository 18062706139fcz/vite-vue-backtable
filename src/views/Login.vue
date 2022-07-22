<template>
<div class="login-body">
    <!-- 登陆框div -->
    <div class="login-container">
        <!-- 登陆框头部logo部分 -->
        <div class="head">
            <img class="logo" src="https://s.weituibao.com/1582958061265/mlogo.png" />
            <div class="name">
                <div class="title">新蜂商城</div>
                <div class="tips">Vue3.0 后台管理系统</div>
            </div>
        </div>
        <el-form label-position="top" :rules="rules" :model="ruleForm" ref="loginForm" class="login-form">
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model.trim="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model.trim="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <div style="color: #333">登录表示您已同意<a>《服务条款》</a></div>
                <el-button style="width: 100%" type="primary" @click="submitForm">立即登录</el-button>
                <el-checkbox v-model="checked" @change="!checked">下次自动登录</el-checkbox>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
import axios from '../utils/axios'
// // 安装 js-md5，密码需要 md5 加密，服务端是解密 md5 的形式
import md5 from 'js-md5'
import {
    reactive,
    ref,
    toRefs
} from 'vue';
import {
    localSet
} from '@/utils';
export default {
    name: 'Login',
    setup() {
        // el-form 组件接收一份 ref 属性，Vue 3.0 需要这样的声明
        const loginForm = ref(null)
        const state = reactive({
            ruleForm: {
                username: '', // 账号
                password: '', // 密码
            },
            checked: true,
            rules: {
                username: [{
                    required: 'true',
                    message: '请输入',
                    trigger: 'blur'
                }],
                password: [{
                    required: 'true',
                    message: '密码不能为空',
                    trigger: 'blur'
                }]
            }
        })
        // 业务逻辑 ==> 表单提交方法
        const submitForm = async () => {
            loginForm.value.validate((valid) => {
                if (valid) {
                    axios.post('backend-api-02.newbee.ltd/api/v1/user/login', {
                        userName: state.ruleForm.username || '',
                        passwordMd5: md5(state.ruleForm.password),
                    }).then(res => {
                        localSet('token', res)
                        window.location.href = '/'
                    })
                } else {
                    console.log('error submit!!')
                    return false;
                }
            })
        }
        const resetForm = () => {
            loginForm.value.resetFields();
        }
        return {
            ...toRefs(state),
            loginForm,
            submitForm,
            resetForm
        }
    }
}
</script>

<style scoped>
.login-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
}

.login-container {
    width: 420px;
    height: 500px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 21px 41px 0px rgba(0, 0, 0, 0.2);
}

.head {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px 0;
}

.head img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
}

.head .title {
    font-size: 28px;
    color: #1BAEAE;
    font-weight: bold;
}

.head .tips {
    font-size: 12px;
    color: #999;
}

.login-form {
    width: 70%;
    margin: 0 auto;
}

.login-form>>>.el-form--label-top .el-form-item__label {
    padding: 0;
}

.login-form>>>.el-form-item {
    margin-bottom: 0;
}
</style>
