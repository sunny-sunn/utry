<template>
  <div class="topbar">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft"/>
    <van-search v-model="searchKeywords" shape="round" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      title: this.$store.state.title,
      searchKeywords: '',
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    }
  },

}
</script>

<style>
.topbar {
  top: 0;
  width: 100%;
  flex-direction: column;
  height: var(--topbar-height);
}
.van-nav-bar {
  width: 100%;
  background-color: #EBEDEE;
}
.van-icon.van-icon-arrow-left {
  color: inherit;
}
</style>