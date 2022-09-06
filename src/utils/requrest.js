// 请求模块
import axios from 'axios'
const requrest = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})
export default requrest
