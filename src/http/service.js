import axios from 'axios'
import { Toast } from 'vant'
import {baseUrl} from '@/config'

const service = axios.create({
  baseURL: baseUrl, // url = base api url + request url
//   withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
let loading
//请求拦截器
service.interceptors.request.use(config=>{
   loading = Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  config.headers['Authorization'] = sessionStorage.getItem('token')
  return  config
},error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    
})
//响应拦截器
service.interceptors.response.use(res=>{
  //关闭loading
   loading.clear()
   return Promise.resolve(res)
},error=>{
   loading.clear()
   console.log('err'+ error)
   return Promise.reject(error)
})
// module.export= service;
export default service
