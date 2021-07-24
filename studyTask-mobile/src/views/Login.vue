<template>
  <div id="login">
    <div class="header">
      <p class="back"><van-icon name="arrow-left" /></p>
      <p>登录</p>
      <p class="close"><van-icon name="cross" /></p>
    </div>
    <div class="container">
      <div class="user">
        <van-icon name="user-circle-o"  size="30" />
      </div>
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="username" label="用户名" placeholder="请输入用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
        <van-field v-model="tel" type="tel" name="tel" label="手机号码" placeholder="请输入11位数手机号码" :rules="[{ required: true, message: '请填写手机号码' }]"/>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      tel: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      if (values && values.tel.length === 11) {
        this.$router.push("/home");
      }
    },
  }
};
</script>

<style>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #ddd;
}
.back{
  margin-left: 15px;
}
.close{
  margin-right: 15px;
}
.user{
  height: 30vh;
  line-height: 30vh;
  text-align: center;
}
</style>
