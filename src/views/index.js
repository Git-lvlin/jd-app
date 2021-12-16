const Home = ()=> import('./home/Home.vue')//是一种性能优化
const Find = ()=> import('./find/Find.vue')
const Cart = ()=> import('./cart/Cart.vue')
const User = ()=> import('./user/User.vue')






export default[
    {path:'/home',components:{alive:Home}},
    {path:'/find',components:{alive:Find}},
    {path:'/cart',components:{alive:Cart}},
    {path:'/user',components:{alive:User}},
]