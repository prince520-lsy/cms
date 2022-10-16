

import { getToken, setToken, removeToken } from '../../utils/token'

const state = {
    token: ''
}

const mutations = {
    set_Token(state, token) {
        state.token = token
        setToken(token)
    }
}


export default {
    namespaced: true,
    state,
    mutations
}