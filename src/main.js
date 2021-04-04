import Vue from 'vue'
import App from './App.vue'

//vant组件引用,按需导入组件，是一种性能优化方案
import { Button,Tabbar, TabbarItem ,NavBar,Swipe, SwipeItem,Search,Icon,NoticeBar,Lazyload,Grid, GridItem,
  List,Col, Row,SwipeCell,Card,Sidebar, SidebarItem,PullRefresh,Field,Form,Stepper,GoodsAction, GoodsActionIcon, GoodsActionButton,Empty,Checkbox, CheckboxGroup,SubmitBar,Dialog,AddressList,AddressEdit,Area} from 'vant';
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);//Tab 标签页
Vue.use(NavBar);//导航栏
Vue.use(Swipe);//轮播
Vue.use(SwipeItem);
Vue.use(Search)//搜索
Vue.use(Icon)
Vue.use(NoticeBar)
Vue.use(Lazyload)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(List)
Vue.use(Col)
Vue.use(Row)
Vue.use(SwipeCell)
Vue.use(Card)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(PullRefresh)
Vue.use(Form)
Vue.use(Field)
Vue.use(Stepper)
Vue.use(GoodsAction)
Vue.use(GoodsActionIcon)
Vue.use(GoodsActionButton)
Vue.use(Empty)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(SubmitBar)
Vue.use(Dialog)
Vue.use(AddressList)
Vue.use(AddressEdit)
Vue.use(Area)









import router from './views/router'//导入路由

import api from '@/api/index.js'//导入api
Vue.prototype.$api=api//挂载到vue原型上

import img from '@/utils/img.js'//导入img模板
Vue.prototype.$img=img//挂载到vue原型对象上

import store from './store/index.js'//导入缓存

import dialog from '@/utils/dialog.js'//导入弹窗
Vue.prototype.$dialog=dialog

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
