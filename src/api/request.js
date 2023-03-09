//对axios二次封装
import axios from 'axios'
//引入进度条 start开始，done结束
import nprogress from 'nprogress'

//引入进度条样式
import 'nprogress/nprogress.css'
// 引入store
import store from '@/store'

//1:利用axios'对象的方法create，创建一个axios实例
//2:request就是axios，只不过稍微配置一下
const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api
    baseURL: "/api",
    timeout: 5000
})


//请求拦截器：在发请求之前要做的事
requests.interceptors.request.use((config) => {
    //config:配置对象，对象里面有一个属性很重要，headers请求头
    if (store.state.detail.uuid_token) {
        // 请求头添加一个字段(userTempId)
        config.headers.userTempId = store.state.detail.uuid_token
    }
    // 携带token给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    nprogress.start() //进度条开始
    return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调函数：服务器响应的数据回来以后，响应拦截器可以检测到
    nprogress.done() //进度条结束
    return res.data
}, (error) => {
    //响应失败的回调函数
    return Promise.reject(new Error('faile'))
})
export default requests