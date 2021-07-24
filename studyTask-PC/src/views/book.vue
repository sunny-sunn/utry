<template>
  <div>
    <!-- 添加按钮 -->
    <el-button type="primary"  @click.stop="addVisible=true">添加收费记录
      <el-dialog title="添加收费记录" :visible.sync="addVisible">
        <el-form :model="formAdd">
          <el-form-item label="收费金额" :label-width="formLabelWidth" required>
            <el-input v-model="formAdd.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="办理时间" :label-width="formLabelWidth" required>
            <el-date-picker type="date" v-model="formAdd.date1" style="width: 200px;"></el-date-picker>
          </el-form-item>
          <el-form-item label="款项类别" :label-width="formLabelWidth">
            <el-select v-model="formAdd.region" placeholder="请选择" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="收费对象" :label-width="formLabelWidth">
            <el-input v-model="formAdd.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="付款方式" :label-width="formLabelWidth">
            <el-select v-model="formAdd.region" placeholder="请选择" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="收费人" :label-width="formLabelWidth">
            <el-input v-model="formAdd.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="凭证号" :label-width="formLabelWidth">
            <el-input v-model="formAdd.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注" :label-width="formLabelWidth">
            <el-input type="textarea" :rows="2" v-model="formAdd.textarea"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.stop="addVisible=false">取消</el-button>
          <el-button type="primary" @click.stop="addVisible=false">确定</el-button>
        </div>
      </el-dialog>
    </el-button>
    <!-- 表格内容 -->
    <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#F0F8FF'}">
      <el-table-column prop="country" label="款项类别" ></el-table-column>
      <el-table-column prop="isbn" label="收费金额" ></el-table-column>
      <el-table-column prop="mediaType" label="收费日期" ></el-table-column>
      <el-table-column prop="name" label="收费对象" ></el-table-column>
      <el-table-column prop="numberOfPages" label="付款方式" ></el-table-column>
      <el-table-column prop="publisher" label="收费人" ></el-table-column>
      <el-table-column prop="released" label="凭证号" ></el-table-column>
      <el-table-column prop="publisher" label="备注" ></el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <!-- 编辑按钮 -->
          <el-button class="el-icon-edit-outline" @click.stop="editVisible=true">
            <!-- 编辑收费记录弹窗 -->
            <el-dialog title="编辑收费记录" :visible.sync="editVisible">
              <el-form :model="formEdit">
                <el-form-item label="收费金额" :label-width="formLabelWidth" required>
                  <el-input v-model="formEdit.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="办理时间" :label-width="formLabelWidth" required>
                  <el-date-picker type="date" v-model="formEdit.date1" style="width: 200px;"></el-date-picker>
                </el-form-item>
                <el-form-item label="款项类别" :label-width="formLabelWidth">
                  <el-select v-model="formEdit.region" placeholder="请选择" style="width: 100%;">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="收费对象" :label-width="formLabelWidth">
                  <el-input v-model="formEdit.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="付款方式" :label-width="formLabelWidth">
                  <el-select v-model="formEdit.region" placeholder="请选择" style="width: 100%;">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="收费人" :label-width="formLabelWidth">
                  <el-input v-model="formEdit.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="凭证号" :label-width="formLabelWidth">
                  <el-input v-model="formEdit.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                  <el-input type="textarea" :rows="2" v-model="formEdit.textarea"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button  @click.stop="handleEdit(scope.$index, scope.row)">取消</el-button>
                <el-button type="primary" @click.stop="editVisible = false">确定</el-button>
              </div>
            </el-dialog>
          </el-button>
          <!-- 删除按钮 -->
          <el-button class="el-icon-delete" @click.stop="deleteVisible=true">
            <!-- 删除消费记录 -->
            <el-dialog title="删除消费记录" :visible.sync="deleteVisible" width="30%" center>
              <span>确定要删除消费记录吗？</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click.stop="deleteVisible = false">取消</el-button>
                <el-button type="primary" @click.stop="deleteVisible = false">确定</el-button>
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
      required:true,
      tableData:[],
      addVisible:false,
      editVisible:false,
      deleteVisible:false,
      formEdit:{},
      formAdd:{},
      formLabelWidth:'120px',
    }
  },
  methods: {
    // 获取表格数据
    getTableData(){
      // https://www.anapioficeandfire.com/api/characters/2
      // https://www.anapioficeandfire.com/api/books
      axios({
        method: 'get',
        url:'https://www.anapioficeandfire.com/api/books'
      }).then((response)=>{
        console.log(response.data)
        this.tableData = response.data
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    // 提交编辑消费记录
    handleEdit(index, row) {
      console.log(index, row);
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
</style>