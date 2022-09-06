// 请求模块
import axios from 'axios'
const requrest = axios.create({
  baseURL: 'http://toutiao.itheima.net'
})
export default requrest
