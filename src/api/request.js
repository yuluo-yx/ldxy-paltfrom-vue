import baseURL from './baseUrl.js'
import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
    baseURL, //api的URL: '/api'
    timeout: 5000, //请求时间
    // withCredentials: false//跨域时使用凭证，默认带上cookies
})

//Request请求拦截器
service.interceptors.request.use(config => {

    // 在发送请求之前做点什么

    //判断token是否存在
    // if (localStorage.getItem('token')) {
    //     // 在请求头中添加token
    //     config.headers = {
    //         'Content-Type': 'application/json',
    //         'config.headers.token': localStorage.getItem('token')
    //     }

    // }
    return config;
}, err => {
    return Promise.reject(err.response);
})

//Response响应拦截器
service.interceptors.response.use(response => {

    // 在得到响应之后做点什么

    return response.data
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                err.message = '请求出错'
                ElMessage.error(err.message)
                break;
            case 401:
                ElMessage.error({
                    message: '授权失败，请重新登登录'
                })
                store.commit('LOGING_OUT') //传值给vuex的mutation改变state
                setTimeout(() => {
                    window.location.reload() //浏览器刷新当前页面
                }, 1000)
                break;
            case 403:
                err.message = '拒绝访问'
                ElMessage.error(err.message)
                break;
            case 404:
                err.message = '请求错误，未找到该资源'
                ElMessage.error(err.message)
                break;
            case 500:
                err.message = '服务器端出错'
                ElMessage.error(err.message)
                break;
        }
    } else {
        // if(JSON.stringify(err).includes('timeout')){
        //     Snackbar.error('服务器响应超时，请刷新当前页')
        // }
        // console.log(err)
        err.message = '连接服务器失败'
        ElMessage.error(err.message)
    }
    // Snackbar.error({
    //     message: err.message
    // })
    return Promise.reject(err.response)
})



export default service