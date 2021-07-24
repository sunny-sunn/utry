<template>
  <div id="home" class="main">
    <div class="swiper">
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item v-for="(item,index) in images" :key="index">
          <img :src="item">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="icon-card">
      <van-grid :gutter="10">
        <van-grid-item>
          <img src="../assets/images/icon-hunlian.png">
          <span>婚恋交友</span>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/images/icon-xinhun.png">
          <span>新婚辅导</span>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/images/icon-jiashi.png">
          <span>家事调解</span>
        </van-grid-item>
        <van-grid-item>
          <img src="../assets/images/icon-zonghe.png">
          <span>综合指导</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeywords: '',
      images:[
        'http://localhost:8080/img/1.76f4ed84.jpeg',
        'http://localhost:8080/img/1.76f4ed84.jpeg'
      ],
    }
  }
}
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  /* font-size: 20px; */
  text-align: center;
  /* background-color: #39a9ed; */
  border-radius: 8px;
  overflow: hidden;
}
.van-swipe-item img{
  width: 350px;
  height: auto;
}
.swiper{
  margin-bottom: 10px;
}
/* .van-grid-item{
  background-color: #E9F7FA;
} */
.van-grid-item img{
  width: 50px;
}
.van-grid-item .van-grid-item__content{
  background-color: #E9F7FA;
}
</style>
