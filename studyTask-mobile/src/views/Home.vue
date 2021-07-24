<template>
  <div id="home">
    <div class="header">
      <p class="back"><van-icon name="arrow-left" /></p>
      <p>在线客服</p>
      <p class="close"><van-icon name="cross" /></p>
    </div>
    <div class="container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <div class="work">
        <van-row type="flex" justify="center">
          <van-col span="6">
            <van-icon name="credit-pay" size="25" />
            <span>卡号查询</span>
          </van-col>
          <van-col span="6">
            <van-icon name="debit-pay" size="25" />
            <span>开户行查询</span>
          </van-col>
          <van-col span="6">
            <van-icon name="contact" size="25" />
            <span>账户管理</span>
          </van-col>
          <van-col span="6">
            <van-icon name="ecard-pay" size="25" />
            <span>紧急挂失</span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col span="6">
            <van-icon name="cash-back-record" size="25" />
            <span>转账限额</span>
          </van-col>
          <van-col span="6">
            <van-icon name="chart-trending-o" size="25" />
            <span>理财管理</span>
          </van-col>
          <van-col span="6">
            <van-icon name="location-o" size="25" />
            <span>网点查询</span>
          </van-col>
          <van-col span="6">
            <van-icon name="edit" size="25" />
            <span>意见反馈</span>
          </van-col>
        </van-row>
      </div>
      <div class="ask">
        <p class="question">猜你想问</p>
          <van-cell title="单元格" value="内容">
            <van-icon name="arrow" />
          </van-cell>
          <van-cell title="单元格" value="内容">
            <van-icon name="arrow" />
          </van-cell>
          <van-cell title="单元格" value="内容">
            <van-icon name="arrow" />
          </van-cell>
          <van-cell>
            <van-icon name="replay" size="16" color="#39a9ed" />
            <span>换一批</span>
          </van-cell>
      </div>
    </div>
    <div class="footer">找不到答案？来问小远吧</div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#home{
  height: 100vh;
  background-color: #eee;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin-bottom: 1px;
}
.back{
  margin-left: 15px;
}
.close{
  margin-right: 15px;
}
.container{
  margin-bottom: 5px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe{
  margin-bottom: 5px;
}
.container .work{
  background-color: #fff;
}
.van-col {
  text-align: center;
  padding: 8px;
}
.van-col span{
  display: block;
  font-size: 14px;
}
.ask .question{
  padding-left: 10px;
  font-weight: bold;
}
.van-cell__value.van-cell__value--alone {
  text-align: center;
}
.van-icon-replay {
  vertical-align: middle;
}
.van-cell__value--alone span{
  color: #39a9ed;
}
.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  color: #39a9ed;
  background-color: #fff;
}
</style>
