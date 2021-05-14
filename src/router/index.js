import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import bingqu from '@/components/bingqu'
import history from '@/components/history'
import jianhu from '@/components/jianhu'
import ruyuan from '@/components/ruyuan'
import bingqu0 from '@/components/bingqu0'
import login from '@/components/login'
import control from '@/components/control'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/bingqu',
      name: 'bingqu',
      component: bingqu
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/jianhu',
      name: 'jianhu',
      component: jianhu
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/ruyuan',
      name: 'ruyuan',
      component: ruyuan
    },
    {
      path: '/bingqu0',
      name: 'bingqu0',
      component: bingqu0
    },

    {
      path: '/control',
      name: 'control',
      component: control
    },
  ]
})
