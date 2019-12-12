import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登陆',
      component: HelloWorld
    },
    {
      path:'/index',
      name:'首页',
      component:index
    }
  ]
})
