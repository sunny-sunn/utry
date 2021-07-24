import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from '../App.vue'
import Sale from '../views/sale.vue'
import Details from '../views/details.vue'

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/sale' },
    { path: '/sale', component: Sale },
    {
      path: '/app',
      component: App,
      meta: { requireAuth: true },
      children: [
        { path: '', redirect: 'sale' },
        { path: 'sale', component: Sale, meta: { requireAuth: true } },
        { path: 'details', component: Details, meta: { requireAuth: true }}
      ]
    }
  ]
})

export default router
