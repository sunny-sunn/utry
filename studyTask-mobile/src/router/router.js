import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: "active",
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/home", component: Home },
    { path: "/login", component: Login }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.path == "/login") {
//     if (localStorage.getItem("SC-Token")) {
//       next("/login");
//     }
//   }
//   next();
// });

export default router;
