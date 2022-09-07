import toast from '@/utils/toast.js'
const Fly = require('flyio/dist/npm/wx')
const fly = new Fly()
fly.config.baseURL = "https://api-hmugo-web.itheima.net/api/public/v1"
fly.config.timeout = 3000
fly.interceptors.request.use((request) => {
  //给所有请求添加自定义header
  request.headers["X-Tag"] = "flyio";
  //打印出请求体
  // console.log(request.body)
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))
  toast.loading()

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
})
//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    //只将请求结果的data字段返回
    uni.hideToast()
    return response.data
  },
  (err) => {
    //发生网络错误后会走到这里
    toast.err('网络错误')
    return Promise.resolve("请求失败")
  }
)



// fly.interceptors.response.use((response) => {
//   (response) => {
//     //只将请求结果的data字段返回
//     console.log(111);
//     return response.data
//   },
//   (err) => {
//     //发生网络错误后会走到这里
//     console.log(222);
//     toast.err('网络错误')
//     return Promise.resolve("请求失败")
//   }
// })

export default fly
