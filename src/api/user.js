// 封装 用户相关的信息的接口
import store from '@/store'
import request from '@/utils/request.js'

// 登录接口
export function login(data) {
    return request({
        method: 'post',
        url: '/auth/login',
        data
    })
}

export function getUserInfo() {
    return request({
        method: 'get',
        url: '/auth/currentUser',
        headers: {
            "Authorization": "Bearer " + store.state.user.token

        }
    })
}