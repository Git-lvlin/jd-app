import axios from '@/utils/axios.js'


//登录接口
//入参:{username,password}
const feachLogin=data=>axios({
    url:'/user/login',
    method:'POST',
    data
})

//注册接口
//入参:{username,password,password2}
const feachRegister=data=>axios({
    url:'/user/regist',
    method:'POST',
    data
})

//新增地址接口
//入参：{ receiver, addr, mobile, primary }
const  addAddress=data=>axios({
    url:'/user/addr/add',
    method:'POST',
    data
})

//获取地址接口
const acquireAddr=params=>axios({
    url:'/user/addr/list',
    method:'GET',
    params
})

//修改默认地址
//入参：{ addr_id }
const alterAddr=params=>axios({
    url:'/user/addr/default',
    method:'GET',
    params
})

//获取订单列表
const acquireOrder=params=>axios({
    url:'/user/order',
    method:'GET',
    params
})

export default{
    feachLogin,
    feachRegister,
    addAddress,
    acquireAddr,
    alterAddr,
    acquireOrder
}