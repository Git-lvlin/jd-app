import axios from 'axios'
import dialog from './dialog';//导入提示弹窗

const baseURL = 'http://localhost:8081'//自己的IP地址
const version = '/api/v1'//已经设置好代理模式，只要访问到/api就跳转到指定的服务器请求数据

// 创建axios实例
const instance = axios.create({
    baseURL: baseURL + version,//已经设置好要访问的接口地址，只要调用再拼接
    timeout: 7000,
    headers: {}
  })
  
  // 封装请求拦截器
  instance.interceptors.request.use(function (config) {
    // 对config进行二次处理、添加公共的config
    // 一般在这里统一加token
    // console.log('请求拦截器', config)
    // 用户鉴权
    config.headers.Authorization = localStorage.getItem('token')
    return config
  }, function (error) {
    return Promise.reject(error)
  })
  
  // 封装响应拦截器
  instance.interceptors.response.use(function (response) {
    // 根据HTTP状态码来判断请求成功与否
    // 根据业务状态码来判断业务成功与否
    // 数据过滤
    let res = null
    if (response.status === 200) {
      const data = response.data//对数据进行过滤,筛选出需要的数组或对象
      switch(data.err){
        case 0://请求成功
          res=data.data
          break
        case -1://表示没有token，立即跳转到登录页面
        window.location.href='/login'
          break
        default:
          dialog.alert({
            title:'错误',
            message: data.msg,
          })
      }
    }else{
      dialog.alert({
        title: '错误',
        message: '网络异常，稍后再试',
      })
    }
    // console.log('响应拦截器', response)
    return res
  }, function (error) {
    return Promise.reject(error)
  })
  
  export default instance