import request from '@/utils/requrest.js'
export const login = (data) => {
  return request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data
  })
}
/**
 *
 * @param {手机号} mobile
 * @returns
 */
export const sendSms = (mobile) => {
  return request({
    url: `/v1_0/sms/codes/${mobile}`,
    method: 'GET'
  })
}
