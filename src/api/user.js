// 封装 用户相关的信息的接口
import request from '@/utils/request.js'

// 登录接口
export function login(data) {
    return request({
        method: 'post',
        url: '/auth/login',
        data
    })
}