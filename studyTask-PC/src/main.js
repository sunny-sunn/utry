import './assets/style/reset.less'

import Vue from 'vue'
import router from './router/index'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import './assets/style/theme/index.css'

import http from './utils/http'
Vue.prototype.$http = http

import './api/index'

new Vue({
  render: h => h('router-view'),
  router,
}).$mount('#app')
