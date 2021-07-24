<template>
  <div id="app">
    <li-topbar></li-topbar>
    <router-view></router-view>
    <li-tabbar :data="navs"></li-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { id: 1, name: "首页", icon: "wap-home-o", path: "/home"},
        { id: 2, name: "我的", icon: "user-o", path: "/my"}
      ]
    }
  }
};
</script>
