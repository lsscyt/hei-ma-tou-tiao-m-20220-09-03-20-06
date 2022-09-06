import request from '@/utils/requrest.js'
export const login = (data) => {
  return request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data
  })
}
