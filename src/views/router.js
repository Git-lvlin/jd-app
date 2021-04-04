import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import route from './index.js'
const router = new VueRouter({
	routes: [
		...route,
		{
			path: '/*',
			redirect: '/home'
		}
	]
})


//定义全局路由守卫：每次路由匹配之前进行一些逻辑处理
router.beforeEach((to, from, next) => {
	// console.log(to)
	// console.log(from)
	if (to.meta.isAuth) {
		if (!localStorage.getItem('token')) {
			next('/login')
		}
		if (localStorage.getItem('token')) {
			next()
		}
	}
	next()
})

export default router
