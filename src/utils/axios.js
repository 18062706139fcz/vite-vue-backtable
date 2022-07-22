import axios from 'axios'
import router from '@/router/index';
import config from '~/config'
import { ElMessage } from 'element-plus'
import { localGet } from './index'


// 后端没有区分测试和正式，写成一个接口。
axios.defaults.baseURL = config[import.meta.env.MODE].baseURL
// axios.defaults.baseURL = 'backend-api-02.newbee.ltd/'
// 携带 cookie 对目前项目没什么作用，因为我们是 token 鉴权
axios.defaults.withCredentials = true
// 请求头,headers 信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
// 默认 post 请求，使用 application/json 形式
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 设置本地数据获取的封装
axios.defaults.headers['token'] = localGet('token') || ''

// ElMessage.error('服务器异常！')

// ElMessage.error(res.data.message)

// 请求拦截器，内部根据返回值，重新组装，统一管理。
axios.interceptors.response.use(res => {
    // 收到的数据不是对象格式的
    if(typeof res.data != 'object') {
        alert('服务器异常！')
        return Promise.reject(res)
    }
    if(res.data.resultCode != 200) {
        if(res.data.resultCode) alert(res.data.message)
        if(res.data.resultCode == 419) {
            router.push({path: '/login'})
        }
        return Promise.reject(res.data)
    }
    return res.data.data
})

export default axios