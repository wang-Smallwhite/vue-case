import axios from 'axios';


/*
* 配置axios实例
* baseURL 请求地址
* timeout 超时时长
*/
const service = axios.create( {
  baseUrl: process.env.VUE_BASE_URL,
  timeout: 10000
})

service.interceptors.request.use(config=>{
  console.log('______请求拦截器')
  return config
})

service.interceptors.response.use(response=>{
  console.log('______响应拦截器')
  return response
})