import Vue from "vue";
import router from "./router/router";

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import App from "./App.vue";

import store from "./store/index";

import "./assets/stye/reset.less"

// import "./api/index";

import Topbar from "./components/topbar.vue"
import Tabbar from "./components/tabbar.vue"
Vue.component("LiTopbar", Topbar)
Vue.component("LiTabbar", Tabbar)

import http from "./utils/http";
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
