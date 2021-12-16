import axios from '@/utils/axios'

//调用接口的方法

//入参：{size,page,cate,hot}
//老黄历
export const laohuangli = params => axios({//按需导出
    url: '/laohuangli/d',
    method: 'POST',
    params
  })

//车品牌
export const cxdqBrand = params => axios({//按需导出
  url: '/cxdq/brand',
  method: 'POST',
  params
})

//油价
export const gnyjQuery = params => axios({//按需导出
  url: '/gnyj/query',
  method: 'POST',
  params
})

//笑话
export const jokeContent = params => axios({//按需导出
  url: '/joke/content/list.php',
  method: 'POST',
  params
})




//默认全部导出
export default{
    laohuangli,
    cxdqBrand,
    gnyjQuery,
    jokeContent
}