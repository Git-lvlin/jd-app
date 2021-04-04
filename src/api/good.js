import axios from '@/utils/axios'

//调用接口的方法

//入参：{size,page,cate,hot}
//首页商品列表
export const homelist = params => axios({//按需导出
    url: '/good/list',
    method: 'GET',
    params
  })


//商品详情
//入参{id}
const gooddetail=params=>axios({
  url:'/good/detail',
  method:'GET',
  params
})


//发现页面
//品类列表
//入参：{id}
const findmenu=params=>axios({
  url:'/good/cates',
  method:'GET',
  params
})

//加入购物车
//入参：num good_id
const addCarList=data=>axios({
  url:'/cart/add',
  method:'POST',
  data
})

//购物车商品列表
const fetchCartList=params=>axios({
  url:'/cart/list',
  method:'GET',
  params
})

// 更新购物车商品数据
// 入参 { id, num }
const fetchCartUpdate = data => axios({
  url: '/cart/update',
  method: 'POST',
  data
})

//删除购物车商品
// 入参 { id }
const delcart=params=>axios({
  url:'/cart/del',
  method:'GET',
  params
})

//提交订单
// 入参： { ids }  是购物车列表项_id组件成的字符串
const submitcart=data=>axios({
  url:'/cart/submit',
  method:'POST',
  data
})

//获取banner
const findbanner=params=>axios({
  url:'/good/list2',
    method:'GET',
    params:params||{}
})


//默认全部导出
export default{
    homelist,
    gooddetail,
    findmenu,
    fetchCartList,
    addCarList,
    fetchCartUpdate,
    delcart,
    submitcart,
    findbanner
}