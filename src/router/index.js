import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import myMessage from '@/views/myMessage/index'
import firstPage from '@/views/firstPage/index'
import notification from '@/views/notification/index'
import swipperDetail from '@/views/swipperDetail/index'
import spaceDetail from '@/views/spaceDetail/index'
import todayD from '@/views/todayD/index'
import informDetail from '@/views/informDetail/index'
import zhangLife from '@/views/zhangLife/index'
import mapDetail from '@/views/mapDetail/index'
import payment from '@/views/payment/index'
import personMessage from '@/views/personMessage/index'
import personScore from '@/views/personScore/index'
import scoreM from '@/views/scoreM/index'
import passwordG from '@/views/passwordG/index'
import dangD from '@/views/dangD/index'
import reactionDetail from '@/views/reactionDetail/index'
import location from '@/views/location/index'
import layout from '@/views/layout'
import comment from '@/views/comment'
import summary from '@/views/summary'
import discuss from '@/views/discuss'
import detail from '@/views/detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout',
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
      path: '/zhangLife',
      component: zhangLife,
    },
    {
      path: '/mapDetail',
      component: mapDetail,
    },
    {
      path: '/informDetail/:id',
      component: informDetail,
    },
    {
      path: '/detail/:id',
      component: detail,
    },
    {
      path: '/todayD',
      component: todayD,
    },


    {
      path: '/login',
      component: Login
    },
    {
      path: '/summary',
      component: summary
    },
    {
      path: '/discuss',
      component: discuss
    },
    {
      path: '/payment',
      component: payment
    },
    {
      path: '/personMessage',
      component: personMessage
    },
    {
      path: '/personScore',
      component: personScore
    },
    {
      path: '/comment',
      component: comment
    },
    {
      path: '/scoreM',
      component: scoreM
    },
    {
      path: '/passwordG',
      meta: {
        title: "改密码"
      },
      component: passwordG
    },
    {
      path: '/dangD',
      component: dangD
    },
    {
      path: '/reactionDetail/:id',
      component: reactionDetail
    },
    {
      path: '/location',
      component: location
    },
    {
      path: '/layout',
      component: layout,
      redirect: '/layout/myMessage',
      children: [
        {
          path: 'myMessage',
          name: 'three',
          component: myMessage,
        },
        {
          path: 'notification',
          name: 'two',
          component: notification,
        },
        {
          path: 'firstPage',
          name: 'one',
          component: firstPage,
        },
      ]
    }
  ]
})
