

import request from '@/utils/request'

export function articleList(params) {
    return request({
        url: '/admin/interview/query',
        method: 'get',
        params
    })
}