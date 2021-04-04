# jd_project 2021-3-9
* cnpm i sass-loader@10.1.1 -D 环境所需要的 安装sass
 cnpm i sass -D

* 在package.json中加 --open启动完成自动打开网页

* vant-ui组件库的安装  npm i vant -S

## watch监听器
* 1、watch中最好监听非引用数据类型
* 2、如果监听是复杂的引用数据，有可能无法监听
* 3、如果多个声明式变量或计算属性发生联动，最好不用

### main.js (入口文件)

### 用v-for时，一定要加v-bind：key='不唯一的值'

### 在单页面中，一切页面皆为组件

### 页面的切换其实就是组件的生与死

### 浏览器的两个事件 onhash     onpopstate

### mode1 hash 默认has路由（显示#）   mode:'history'(不显示#)

## 路由安装
--cnpm install vue-router
# -S 表示安装成功，将其记录在packge.json

## cnpm i sass-loader -D  安装到开发环境 devDependencies中

## cnpm i sass -D 编译器 把sass代码编译成css代码


## 跨域
* 什么是跨域？只要是协议、域名、端口，只有一个不相同就是跨域
* 什么同源策略？只有浏览器中才有，限制ajax跨域请求

* 怎么解决跨域？
* 1、让前后端代码都跑在同个域上
* 2、通过代理的方式，绕过CORS同源策略

## 状态管理Store


## modules
* 这个概念只是一种架构思维层面上的概念
* 作用是把根store拆分多个小的基于业务模块的小store
* 你可以把modules对象中的key，理解成子store的命名空间
* 在子store中，记得要手动开启命名空间 namespaced:true


## 简单描述一下vuex的流程
* 1、当组件中发生用户行为时，dispatch一个actions，同时传递调接口的入参
* 2、actions收到入参后，与后端发生交互，调接口
* 3、在actions中调接口成功后，commit一个mutations，同时传递业务数据
* 4、mutations收到业务数据后，将其更新到state上
* 5、凡是使用到state上这个业务的组件，都会自动渲染更新

## axios调用接口的方式
* 如果是GET请求使用params属性入参
* 如果是POST请求使用data属性入参

## mapState,mapMutations.....的使用
```
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

methods: {

computed:{
    ...mapState('子store',['state里面的数据'])
},
methods:{
    ...mapMutations('子store',['mutations里面的方法']),
    ...mapActions('子store',['actions里面的方法'])
}

触发mutations的方法（）{
    this.mutations里面的方法(输入的数据)
}，
触发actions的方法（）{
    this.actions里面的方法(入参)
}
```

## 商品的id可以通过路由push方法地址栏后面拼接
* this.$router.push('./detail/'+this.good._id)//发送
* this.$route.params.id  //接收


## 组件绑定的辅助函数
# this.$store.dispatch('getstubmenu')相当于
* ...mapActions('good',['getstubmenu'])
加this.getstubmenu(this.payload)//传给actions

#  store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：


## 缓存的性能优化
* 当用户反复点击商品时不用每次都调用接口，利用缓存机制判断是否有缓存，没有就调用，有就直接拿出来用


## 深拷贝的作用
* 可以使引用类型渲染页面时不自动更新的问题


## 当有两个接口之间发生联动时，要用到promise方式，把两个异步任务，变成有先后顺序的同步任务，使一个接口完成时要等待另一个接口完成才会继续执行下面的
```
 async mounted(){
     await 第一个接口
     await 第二个接口
 }

 ```

 ## 点击商品跳转到详情页
 * 根据点击时该商品的id传入到url地址后面  
 # 通过$router.push添加id 
 * this.$router.push('./detail/'+id)  
 # 获取$route.params.id获取id
 * this.$route.params.id  


## 用户鉴权
* 在axios中添加
* 一般在请求拦截器添加token
* 请求头
* Authorization不固定
* config.headers.Authorization = localStorage.getItem('token')


## 接口方法的封装以及使用
* 第一步：引入axios,定义一个axios.js文件，在创建axios实例，专门用于对于请求进行拦截
* 第二步：定义api文件，里面定义index.js，index.js里面导入定义好的所有接口方法
* 第三步：在main.js文件中将api挂到vue原型上，用的时候直接thi.$api.方法()



## v-model='item.checked'时，自动在该对象中加入checked属性

## 在计算属性计算总价格的好处就是会实现响应式 
* 计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值


## 组件切换保持状态
*  <keep-alive><router-views></rputer-views></keep-alive>
*  @scroll="top=$event.srcElement.scrollTop"
#  activated(){//配合keep-alive使用，表示激活时触发,解决页面不更新的问题
*  当页面再次被激活时，手动地（Ref操作）把页面滚动到上一次被记录的位置
      this.$refs.hom.scrollTop=this.top
#    }



##  使用监听器，虽然好用，但也要小心
* 1、如果监听是复杂的引用数据，有可能无法监听
* 2、如果多个声明式变量或计算属性，形成了彼此依赖的关系，监听器可能也没有办法
 
 
 ## 导航守卫
*  对有权限的页面来讲，我们需要进一步判断是否登录了
*  使用路由元信息：

```
# 定义全局路由守卫：每次路由匹配之前进行一些逻辑处理

path:'/cart',components:{alive:Cart},meta:{isAuth: true}},//利用元信息来判断哪些组件要进行路由守卫

router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){
      if(!localStorage.getItem('token')){
        next('/login')
      }
      if(localStorage.getItem('token')){
        next()
      }
    }
    next()
})


#  局部路由守卫
  // 组件尚未实例化，无法访问this、声明式变量，比响应式更早，在它之前
  beforeRouteEnter(to, from, next) {
    // next('/login')
    next()
  },

```


## 性能优化
* 1、按需导入组件，是一种性能优化方案
* 2、使用vuex做缓存,判断vuex中的cache是否有对应的缓存数据，有就直接用，没有就调用接口，大大降低了用户频繁触发接口调用数据所不必要的操作
* 3、 使用mutations方法清缓存，切换组件时可以把缓存清掉，节省空间