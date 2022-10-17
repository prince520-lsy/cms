// 封装数据持久化函数
// 统一把操作token的代码封装在一起，
// 是为了后期维护方便。

const storeToken = 'token'
// 保存token
export function setToken(token) {
    localStorage.setItem(storeToken, token)
}

// 获取token
export function getToken() {
    return localStorage.getItem(storeToken)
}

// 删除token
export function removeToken() {
    localStorage.removeItem(storeToken)
}