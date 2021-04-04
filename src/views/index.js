const Home = ()=> import('./home/Home.vue')//是一种性能优化
const Find = ()=> import('./find/Find.vue')
const Cart = ()=> import('./cart/Cart.vue')
const User = ()=> import('./user/User.vue')
const GoodDetail = ()=> import('./home/GoodDetail.vue')
const Login = ()=> import('./user/Login.vue')
const Logout= ()=> import('./user/Logout.vue')
const Register = ()=> import('./user/Register.vue')//路由懒加载
const Addr= ()=> import('./user/Addr.vue')
const Edit= ()=> import('./user/Edit.vue')
const Order= ()=> import('./cart/Order.vue')






export default[
    {path:'/home',components:{alive:Home}},
    {path:'/find',components:{alive:Find}},
    {path:'/cart',components:{alive:Cart},meta:{isAuth: true}},//利用元信息来判断哪些组件要进行路由守卫
    {path:'/user',components:{alive:User},meta:{isAuth: true}},
    {path:'/detail/:id',component:GoodDetail},
    {path:'/login',component:Login},
    {path:'/logout',component:Logout},//退出登录
    {path:'/regist',component:Register},
    {path:'/addr',component:Addr},//地址栏
    {path:'/edit',component:Edit},//地址编辑栏
    {path:'/order',component:Order}//订单栏
]