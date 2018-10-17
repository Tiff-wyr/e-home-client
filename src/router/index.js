import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import MyMessage from '@/views/myMessage/index'
import firstPage from '@/views/firstPage/index'
import notification from '@/views/notification/index'
import swipperDetail from '@/views/swipperDetail/index'
import spaceDetail from '@/views/spaceDetail/index'
import todayD from '@/views/todayD/index'
import informDetail from '@/views/informDetail/index'
import zhangLife from '@/views/zhangLife/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/notification',
    },
    {
      path: '/swipperDetail/:id',
      component: swipperDetail,
    },
    {
      path: '/spaceDetail/:id',
      component: spaceDetail,
    },
    {
      path: '/firstPage',
      component: firstPage,
    },
    {
      path: '/zhangLife',
      component: zhangLife,
    },
    {
      path: '/informDetail/:id',
      component: informDetail,
    },
    {
      path: '/todayD',
      component: todayD,
    },
    {
      path: '/notification',
      component: notification,
    },
    {
      path: '/MyMessage',
      component: MyMessage,
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
