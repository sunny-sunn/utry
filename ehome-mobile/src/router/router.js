import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/home.vue";
import My from "../views/my.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: "active",
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/my", component: My }
  ]
});

export default router;
