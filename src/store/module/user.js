
// 用户保存用户相关信息的vuex模块
import { setToken, getToken } from '@/utils/auth'
const state = {
    token: getToken() // 刷新浏览器的时候重新从缓存中获取
}
const mutations = {
    // 保存token
    SET_TOKEN(state, token) {
        state.token = token
        // 保存token 数据持久化
        setToken(token)
    }
}
export default {
    namespaced: true,
    state,
    mutations
}