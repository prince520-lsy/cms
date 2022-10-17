

import axios from "axios";
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router/index'
// axios.defaults.baseURL = 'https://api.example.com';
const instance = axios.create({
    baseURL: 'http://interview-api-t.itheima.net/',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const token = store.state.user.token
    if (token) {
        config.headers.Authorization = "bearer " + token
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log(31, response);
    if (response.data.code === 10000) {
        Message.success(response.data.message)
    }

    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log(error);
    if (error.response.data.code === 401) {
        router.push('/login')
        Message.error(error.response.data.message)
    }
    if (error.response.data.code !== 200) {
        Message.error(error.response.data.message)
    }
    return Promise.reject(error);
});



//导出axios实例对象
export default instance