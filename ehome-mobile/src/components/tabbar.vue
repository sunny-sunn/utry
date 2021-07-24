<template>
  <div class="tabbar">
    <router-link v-for="(item,index) in data" :key="index" :to="item.path">
      <van-icon :name="item.icon"></van-icon>
      <span>{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    value: [String, Number]
  }
}
</script>

<style>
.tabbar {
  bottom: 0;
  width: 100%;
  height: var(--tabbar-height);
  background-color: #fff;
  border-top: solid 1px #eee;
}
.tabbar a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
}
.tabbar a i {
  font-size: 0.4rem;
  margin-bottom: 0.05rem;
  color: #555;
}
.tabbar a span {
  font-size: 0.2rem;
  color: #848484;
}
.tabbar a.active i,
.tabbar a.active span {
  color: #FDB10B;
}
</style>