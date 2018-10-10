import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Shop from './views/Shop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/contact',
      name: 'contact',
      component: About
    },
    {
      path: '/panier',
      name: 'panier',
      component: About
    }
  ]
})
