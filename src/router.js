import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = () => import('@/views/home')
const item = () => import('@/views/item')
const main = () => import('@/views/main')
const shopcar = () => import('@/views/shopcar')
const details = () => import('@/views/details/index')
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/item',
      name: 'item',
      component: item
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    }
  ]
})
