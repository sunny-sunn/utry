import Vue from "vue";
import router from "./router/router";

import { Form, Field, Button, Icon, Swipe, SwipeItem, Col, Row, Cell, CellGroup } from "vant";
import "vant/lib/index.css";
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Cell);
Vue.use(CellGroup);

import App from "./App.vue";

import store from "./store/index";

import "./assets/stye/reset.less"

// import "./api/index";

import http from "./utils/http";

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
