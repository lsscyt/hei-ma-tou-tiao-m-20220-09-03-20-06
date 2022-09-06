import request from '@/utils/requrest.js'
export const login = (data) => {
  return request({
    url: '/app/v1_0/authorizations',
    Method: 'POST'
  })
}
