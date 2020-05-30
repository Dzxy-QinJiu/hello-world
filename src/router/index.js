import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '../views/Default'
import IndexPage from '../views/Index'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'defaultPage',
    component: DefaultPage,
    redirect: "index",
    children: [{
        path: 'index',
        name: 'index',
        component: IndexPage,
      },
      {
        path: 'changeCity',
        name: 'changeCity',
        component: () => import('../views/ChangeCity'),
      },
      {
        path: 'goodsList/:name',
        name: 'goodsList',
        component: () => import('../views/GoodsList'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
    // if(savedPosition) {
    //   return savedPosition;
    // } else {
    //   if(to.hash) {
    //     return { selector: to.hash }
    //   } else {
    //     return {x: 0, y: 0}
    //   }
    // }
  },
})

export default router;