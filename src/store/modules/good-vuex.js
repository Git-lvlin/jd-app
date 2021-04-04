import { homelist } from '@/api/good.js'//按需导入商品显示列表接口

export default{
    namespaced:true,
    state:{
        cache:{}//用于缓存和渲染的对象
    },
    mutations:{
        updata(state,payload){
            state.cache[payload.key]=payload.list

            //可以使引用类型渲染页面时不自动更新的问题
            //深拷贝
            state.cache=JSON.parse(JSON.stringify(state.cache))
        },
        clearcache(state){
            state.cache={}//清缓存
        }
    },
    actions:{
        //与后端api进行交互的方法
        getsubmenu(store,payload){
            //入参cate
            const params={
                cate:payload.cate
            }
            homelist(params).then(res=>{//右边商品显示列表接口
                //参数{页面点击的activeKey的1、2、3.., 接口返回的数组}
                store.commit('updata',{key:payload.key,list:res.list})
            })

        }
    }
}