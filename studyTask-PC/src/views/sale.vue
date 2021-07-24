<template>
  <div>
    <!-- 添加按钮 -->
    <el-button type="primary"  @click.stop="add()">添加收费记录
      <el-dialog title="添加收费记录" :visible.sync="addVisible">
        <el-form ref="formAdd" :model="formAdd" :rules="rules">
          <el-form-item prop="money" label="收费金额" :label-width="formLabelWidth">
            <el-input v-model="formAdd.money" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="date" label="办理时间" :label-width="formLabelWidth">
            <el-date-picker type="date" v-model="formAdd.date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" style="width: 200px;"></el-date-picker>
          </el-form-item>
          <el-form-item prop="classify" label="款项类别" :label-width="formLabelWidth">
            <el-select v-model="formAdd.classify" placeholder="请选择" style="width: 100%;">
              <el-option label="信用卡" value="信用卡"></el-option>
              <el-option label="预收款" value="预收款"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="target" label="收费对象" :label-width="formLabelWidth">
            <el-input v-model="formAdd.target" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="way" label="付款方式" :label-width="formLabelWidth">
            <el-select v-model="formAdd.way" placeholder="请选择" style="width: 100%;">
              <el-option label="信用卡" value="信用卡"></el-option>
              <el-option label="支票" value="支票"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="people" label="收费人" :label-width="formLabelWidth">
            <el-input v-model="formAdd.people" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="number" label="凭证号" :label-width="formLabelWidth">
            <el-input v-model="formAdd.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="remark" label="备注" :label-width="formLabelWidth">
            <el-input type="textarea" :rows="2" v-model="formAdd.remark"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.stop="cancelAdd()">取消</el-button>
          <el-button type="primary" @click.stop="handleAdd()">确定</el-button>
        </div>
      </el-dialog>
    </el-button>
    <!-- 列表 -->
    <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#F0F8FF'}">
      <el-table-column prop="classify" label="款项类别" ></el-table-column>
      <el-table-column prop="money" label="收费金额" ></el-table-column>
      <el-table-column prop="date" label="收费日期" ></el-table-column>
      <el-table-column prop="target" label="收费对象" ></el-table-column>
      <el-table-column prop="way" label="付款方式" ></el-table-column>
      <el-table-column prop="people" label="收费人" ></el-table-column>
      <el-table-column prop="number" label="凭证号" ></el-table-column>
      <el-table-column prop="remark" label="备注" ></el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <!-- 编辑按钮 -->
          <el-button class="el-icon-edit-outline" @click.stop="edit(scope.row)">
            <!-- 编辑收费记录弹窗 -->
            <el-dialog title="编辑收费记录" :visible.sync="editVisible">
              <el-form ref="formEdit" :model="formEdit" :rules="rules">
                <el-form-item label="收费金额" prop="money" :label-width="formLabelWidth">
                  <el-input v-model="formEdit.money" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="办理时间" prop="date" :label-width="formLabelWidth">
                  <el-date-picker type="date" v-model="formEdit.date" style="width: 200px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="款项类别" prop="classify" :label-width="formLabelWidth">
                  <el-select v-model="formEdit.classify" placeholder="请选择" style="width: 100%;">
                    <el-option label="信用卡" value="信用卡"></el-option>
                    <el-option label="预收款" value="预收款"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="收费对象" prop="target" :label-width="formLabelWidth">
                  <el-input v-model="formEdit.target" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="付款方式" prop="way" :label-width="formLabelWidth">
                  <el-select v-model="formEdit.way" placeholder="请选择" style="width: 100%;">
                    <el-option label="信用卡" value="信用卡"></el-option>
                    <el-option label="支票" value="支票"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="收费人" prop="people" :label-width="formLabelWidth">
                  <el-input v-model="formEdit.people" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="凭证号" prop="number" :label-width="formLabelWidth">
                  <el-input v-model="formEdit.number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="remark" :label-width="formLabelWidth">
                  <el-input type="textarea" :rows="2" v-model="formEdit.remark"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button  @click.stop="cancelEdit()">取消</el-button>
                <el-button type="primary" @click.stop="handleEdit()">确定</el-button>
              </div>
            </el-dialog>
          </el-button>
          <!-- 删除按钮 -->
          <el-button class="el-icon-delete" @click.stop="del(scope.row)">
            <!-- 删除消费记录 -->
            <el-dialog title="删除消费记录" :visible.sync="deleteVisible" width="30%" center>
              <span><i class="el-icon-warning icon"></i>确定要删除消费记录吗？</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click.stop="deleteVisible = false">取消</el-button>
                <el-button type="primary" @click.stop="delItem(scope.row, scope.row.number)">确定</el-button>
              </span>
            </el-dialog>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      tableData:[],
      rules: {
        money: { required: true, message: '请输入收费金额' },
        date: { required: true, message: '请选择办理时间' }
      },
      addVisible:false,
      editVisible:false,
      deleteVisible:false,
      formAdd:{},
      formEdit:{},
      formLabelWidth:'120px',
      delData:{}
    }
  },
  methods: {
    // 获取表格数据
    getTableData(){
      this.$http.get('sale/list').then(res => {
        this.tableData = res.result
      })
    },
    // 添加消费记录
    add(){
      // this.formAdd = {},
      this.addVisible = true
    },
    // 提交添加消费记录
    handleAdd () {
      this.$refs.formAdd.validate(valid => {
        if (valid) {
          this.$http.post('sale/add', { ...this.formAdd }).then(res => {
            console.log(res.result)
            if (res.result.err > 0) {
              this.$message.error(res.result.msg)
            } else {
              this.$message.success(res.result.msg)
              this.getTableData()
            }
          })
        }
        this.formAdd = {}
        this.addVisible = false
      })
    },
    // 取消添加消费记录
    cancelAdd() {
      this.formAdd = {}
      this.addVisible = false
    },
    // 编辑消费记录
    edit(row){
      console.log(row);
      this.formEdit = row
      this.editVisible = true
    },
    // 提交编辑消费记录
    handleEdit() {
      this.$refs.formEdit.validate(valid => {
        if (valid) {
          this.$http.post('sale/edit', { ...this.formEdit }).then(res => {
            console.log(res.result)
            if (res.result.err > 0) {
              this.$message.error(res.result.msg)
            } else {
              this.$message.success(res.result.msg)
              this.getTableData()
            }
          })
        }
        this.editVisible = false
      })
    },
    // 取消编辑消费记录
    cancelEdit() {
      this.formEdit = {}
      this.editVisible = false
    },
    // 删除消费记录
    del(row) {
      this.delData = row
      this.deleteVisible = true
    },
    // 确定删除消费记录
    delItem() {
      const num = this.delData.number
      this.$http.post('sale/remove', { num }).then(res => {
        this.getTableData()
        this.deleteVisible = false
      })
    },
  },
  mounted() {
    this.getTableData()
  }
}
</script>

<style>
.el-dialog__header {
  padding: 20px;
  background-color: #EDEFF3;
  text-align: center;
}
.el-form-item__content {
  text-align: left;
}
.el-button{
  text-align: left;
}
.el-dialog__footer{
  text-align: center;
}
.el-dialog__body {
    padding-bottom: 0;
    border-bottom: solid 1px #EDECED;
}
.el-dialog__footer {
    padding-top: 20px;
}
.el-table td, .el-table th.is-leaf {
  border-bottom: 1px solid #EDF0F7;
}
.icon{
  font-size: 18px;
  color: #E6A23C;
  margin-right: 5px;
}
</style>