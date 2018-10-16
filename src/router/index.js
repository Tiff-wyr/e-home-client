import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import MyMessage from '@/views/myMessage/index'
import firstPage from '@/views/firstPage/index'
import notification from '@/views/notification/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/firstPage',
      children:[
        {
          path: '/firstPage',
          component: firstPage,
        },
        {
          path: '/notification',
          component: notification,
        },
        {
          path: '/MyMessage',
          component: MyMessage,
        },
      ]
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
