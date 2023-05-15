import axios from 'axios';
// import {MessageBox, Message} from 'element-ui';
import { getToken } from '@/utils/auth'

/*
* 配置axios实例
* baseURL 请求地址
* timeout 超时时长
*/
const service = axios.create( {
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000 
})

service.interceptors.request.use(config=>{
  // console.log('______请求拦截器')
  config.headers['token'] = getToken()
  return config
}, error =>{
  return Promise.reject(error)
})

service.interceptors.response.use(response=>{
  // console.log('______响应拦截器')
  const res = response.data;
  if(res.code !== 200) {
    // Message({
    //   message:res.message || 'Error',
    //   type: 'error',
    //   duration: 5 * 1000
    // })
  }
  if(res.code == 508 || res.code == 512 || res.code == 514) {
    // 登录过期
  }else {
    return res
  }
})

export default service