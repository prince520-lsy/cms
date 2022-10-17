

export function setToken(token) {
    localStorage.setItem('token', token)
}
export function getToken(token) {
    return localStorage.setItem('token')
}
export function removeToken(token) {
    localStorage.removeItem('token')
}