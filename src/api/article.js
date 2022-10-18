

import request from '@/utils/request'

export function articleList(params) {
    return request({
        url: '/admin/interview/query',
        method: 'get',
        params
    })
}

export function addArticle(data) {
    return request.post('/admin/interview/create', data)
}

export function delArticle(data) {
    return request.delete('/admin/interview/remove', data)
}

export function getAricledetails(id) {
    return request.get('/admin/interview/show', { params: id })
}

export function updateArticle(data) {
    return request.put('/admin/interview/update', data)
}