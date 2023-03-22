// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入四个页面的组件
import MSite from '../pages/MSite/index.vue'
import Search from '../pages/Search/index.vue'
import Profile from '../pages/Profile/index.vue'
import Order from '../pages/Order/index.vue'
import Login from '../pages/Login/index.vue'
// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'MSite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    }, {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
