<template>
  <!-- <div id="app"></div> -->
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import sale from './views/sale.vue'

export default {
  // name: 'App',
  // components: {
  //   sale
  // }
}
</script>

<style></style>