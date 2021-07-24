<template>
  <div>
    <el-container>
      <el-header>案件信息</el-header>
      <el-main>
        <div class="content-left">
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">客户姓名：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">张三</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">催收案件：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">2021061101</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">案件类型：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">信用卡</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">代理律师：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">立案日期：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">案号：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">首次开庭日期：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">2021061101</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">判决日期：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">备注：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">2021061101</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">办案进度：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">2021061101</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">被告</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">2021061101</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">律师联系方式：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">2021061101</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">受案法院：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">2021061101</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">诉讼费缴纳日期：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">2021061101</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">执行终结日期：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">2021061101</div></el-col>
          </el-row>
        </div>
        <div class="content-right">
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">证件号：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">3333333333</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">委托人：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">所属人：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">费用：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">￥9999<a href="#">[已收款：9999]</a></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">立案法官：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">保全费缴纳时间：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">申请执行案号：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">判决书：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">案件状态：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">办案</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">附件：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"><a href="#">[管理]</a></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">标的：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">委案日期：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">法官联系方式：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">保全资产清单：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right"></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple left">送达情况：</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple right">{{isbn}}</div></el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      isbn:''
    }
  }
}
</script>

<style>
.el-header{
  line-height: 60px;
  border-bottom: solid 1px #eee;
}
.el-container .el-main{
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
.content-left{
  display: flex;
  flex-direction: column;
  width: 50%;
}
.content-right{
  display: flex;
  flex-direction: column;
  width: 50%;
}
.grid-content.left{
  text-align: right;
}
.grid-content.right{
  text-align: left;
}
</style>