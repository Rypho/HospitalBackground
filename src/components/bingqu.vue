//病区管理
<template>
  <div id="back">
    <div id="left">
      <div id="li">
        <img src="../assets/pic/管理.png" height="25" width="28" style="position: relative;top: 7px;left: -7px"/>管理平台</div>
      <div id="menu">
        <el-menu>
          <router-link to="home"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/首页.png" class="img1" height="17" width="17"/>首页</el-menu-item></router-link>
          <router-link to="bingqu"><el-menu-item class="liLevel" style="color: #3e99ff;font-size:11px;"><img src="../assets/pic/病区1.png" class="img1" height="17" width="17"/>病区管理</el-menu-item></router-link>
          <router-link to="ruyuan"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/入院.png" class="img1" height="17" width="17"/>入院管理</el-menu-item></router-link>
          <router-link to="jianhu"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/监护.png" class="img1" height="17" width="17"/>监护看板</el-menu-item></router-link>
          <router-link to="history"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/历史.png" class="img1" height="17" width="17"/>监护历史</el-menu-item></router-link>
          <router-link to="control"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/管理员.png" class="img1" height="17" width="17"/>管理员管理</el-menu-item></router-link>
        </el-menu>
      </div>
    </div>
    <div id="top">
      <div id="t1">病区管理</div>
      <div id="t2">院区管理员，欢迎进入</div>
      <router-link to="login"><div id="t3"><img src="../assets/pic/退出.png" class="img2" height="18" width="18"/>退出登录</div></router-link>
    </div>
    <div id="content">
      <div style="height:500px;width:95%;margin-left: 25px;margin-top: 15px">
      <el-card class="box-card">
        <router-link to="bingqu0"><el-button size="mini" type="primary" style="margin-bottom: 20px;float: left;margin-left: 10px" >添加病区</el-button></router-link>
        <el-button type="primary" icon="el-icon-search" style="font-size: 11px;float: right;height: 35px" @click="onSearch">搜索</el-button>
        <div style="float: right;margin-bottom: 10px;">
          <el-select clearable
             v-model="searchdata1"  style="margin-right: 10px;" placeholder="请选择病区">
            <el-option style="margin-left: 15px;"
              v-for="item in options1"
              :key="item.key"
              :label="item.label"
              :value="item.key"></el-option>
          </el-select>
          <el-select v-model="searchdata2"  collapse-tags clearable
                     style="float: right; margin-right: 10px;width: 120px;" placeholder="请选择科室">
            <el-option style="margin-left: 15px;"
              v-for="item in options2"
              :key="item.key"
              :label="item.label"
              :value="item.key">
            </el-option>
          </el-select>
        </div>
        <el-table
          :data="tableData"
          border
          stripe
          cell-style="padding:5px"
          style="width: 100%;font-size: 12px "
          @selection-change="handleSelectionChange"
        >
          <el-table-column prop="name" label="病区名" align="center" width="180"></el-table-column>
          <el-table-column prop="keshi" label="所属科室" align="center"></el-table-column>
          <el-table-column prop="fangshu" label="病房数" align="center"></el-table-column>
          <el-table-column prop="chuangwei" label="床位数" align="center"></el-table-column>
          <el-table-column prop="fuze" label="病区负责人" align="center" width="100"></el-table-column>
          <el-table-column prop="phone" label="电话" align="center"></el-table-column>
          <el-table-column prop="place" label="位置" align="center" width="180"></el-table-column>
          <el-table-column label="操作" align="center" width="250">
            <template slot-scope="scope" class="active" width="250">
              <el-button size="mini"  @click="Edit(scope)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
              <el-button size="mini" type="primary" @click="Open(scope)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row :gutter="20">
          <el-col :span="6" :offset="12">
            <div class="block">
              <el-pagination
                style="margin-top: 10px"
                center
                background
                layout="prev, pager, next, sizes, total, jumper"
                :page-sizes="[4,6,8,10]"
                :page-size="pagesize"
                :total="tableData.length"
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
              >
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </el-card>
        <el-dialog title="编辑病区信息"
                   :visible.sync="editbingquForm" size="tiny" :modal-append-to-body='false' @close='closeDialog' >
          <el-form ref="editsForm" :model="editsForm" label-width="200px" style="font-size: 12px" label-position="right">
            <el-form-item label="病区名" >
              <el-input  v-model="editsForm.name" max-length="10" ></el-input>
            </el-form-item>
            <el-form-item label="所属科室">
              <el-input  v-model="editsForm.keshi" max-length="10" ></el-input>
            </el-form-item>
            <el-form-item label="病区负责人" >
              <el-input  v-model="editsForm.fuze" max-length="10" ></el-input>
            </el-form-item>
            <el-form-item label="电话">
              <el-input  v-model="editsForm.phone" max-length="10"></el-input>
            </el-form-item>
            <el-form-item label="位置">
              <el-input  v-model="editsForm.place" max-length="10"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="update(editsForm)" style="font-size: 13px;height: 35px">确定</el-button>
          <el-button @click="closeDialog" style="font-size: 13px;height: 35px">取消</el-button>
        </el-dialog>
        <el-dialog title="病区详情" :visible.sync="editbingquForm1" size="tiny" :modal-append-to-body='false' @close='closeDialog1' >
          <el-form ref="editsForm" :model="editsForm1" label-width="200px" style="font-size: 12px">
            <el-form-item label="病区名" >
              <el-input  v-model="editsForm1.name" max-length="10" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="所属科室">
              <el-input  v-model="editsForm1.keshi" max-length="10" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="病区负责人" >
              <el-input  v-model="editsForm1.fuze" max-length="10" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="电话">
              <el-input  v-model="editsForm1.phone" max-length="10" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="位置">
              <el-input  v-model="editsForm1.place" max-length="10" :disabled="true"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="closeDialog1" style="font-size: 13px;height: 35px">关闭</el-button>
        </el-dialog>
      <div id="foot">Copyrigth @ 2020. All Rigths Reserved. 杭州小为智能科技有限公司 版权所有 v1.0.0</div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      //搜索关键词
      searchdata1: "",
      searchdata2: "",
      currentPage: 1, //当前页数
      pageSize: 10, //每页获取条数
      tableData: [], //存放从后端传来的数据
      //编辑信息数据
      editsForm:{
        keshi:'', name:'',
        fangshu:'', chuangwei:'',
        phone:'', place:'',
        fuze:'',
      },
      //信息详情数据
      editsForm1:{
        keshi:'', name:'',
        fangshu:'', chuangwei:'',
        phone:'', place:'',
        fuze:'',
      },
      //选择器
      options1: [{key: '0', label: '全部病区'},
        {key: '妇产科第一病区', label: '妇产科第一病区'},
        {key: '妇产科第二病区', label: '妇产科第二病区'},
        {key: '新生儿科第一病区', label: '新生儿科第一病区'},
        {key: '新生儿科第二病区', label: '新生儿科第二病区'},
      ],
      value1: [],
      options2: [{key: '0', label: '全部科室'},
        {key: '产科', label: '产科'},
        {key: '妇科', label: '妇科'},
        {key: '新生儿科', label: '新生儿科'},
      ],
      value2: [],
    };
  },
  created() {
    this.searchdata1 = this.options1[0].key
    this.searchdata2 = this.options2[0].key
  },
  mounted() {
    this.getData();
  },
  methods: {
    //获取数据库数据
    getData() {
      axios.get("api/user/show")
        .then(
          res => {
          this.tableData= res.data;
        },
          res => {
          console.log("error");
          this.$message.error("请求失败！");
        });
    },
    // 点击编辑按钮
    Edit(scope){
      this.editbingquForm = true; //编辑信息模态框显示
      this.editsForm.name = scope.row.name
      this.editsForm.keshi = scope.row.keshi
      this.editsForm.phone = scope.row.phone
      this.editsForm.place = scope.row.place
      this.editsForm.fuze = scope.row.fuze
    },
    //点击查看详情
    Open(scope){
      this.editbingquForm1 = true; //详情信息模态框显示
      this.editsForm1.name = scope.row.name
      this.editsForm1.keshi = scope.row.keshi
      this.editsForm1.phone = scope.row.phone
      this.editsForm1.place = scope.row.place
      this.editsForm1.fuze = scope.row.fuze
    },
    //编辑数据
    update (editsForm) {
      const name = this.editsForm.name;
      const keshi = this.editsForm.keshi;
      const phone = this.editsForm.phone;
      const place = this.editsForm.place;
      const fuze = this.editsForm.fuze;
      axios.post('/api/user/update', {
        name: name, keshi: keshi,
        fuze: fuze, phone: phone,
        place: place,
      },{})
        .then(res => {
        this.$message.success('修改成功')
          this.getData();
        this.editbingquForm = false
        }).catch(function (error) {
        console.log(error)
        this.$message.error("请求失败！");
      })
    },
    //关闭编辑框
    closeDialog(){
      this.getData();
      this.editbingquForm = false;
    },
    //关闭详情框
    closeDialog1(){
      this.getData();
      this.editbingquForm1 = false;
    },
    //搜索
    onSearch(){
      if (this.searchdata1 == "" && this.searchdata2 == "") {
        this.$message.warning("查询条件不能为空！");
        this.getData();
        return;
      }
      const name = this.searchdata1;
      const keshi = this.searchdata2;
      axios.post("api/user/search",{name:name,keshi:keshi})
        .then(
          res => {
            this.tableData = res.data;
            this.$message.success("查询成功");
          },
          response => {
            console.log("error");
            this.$message.error("请求失败！");
          }
        );
    },
    //删除
    handleDelete(id){
      //提示框
      this.$confirm("此操作将永久删除此记录, 是否继续?", "警告", {
        confirmButtonText: "继续",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const data = { id };
          axios.post("api/user/del", data)
            .then(res => {
              this.$message.success('删除成功')
              this.getData(); //删除数据后重新获取数据
            })
            .catch(() => {
              this.$message.error("请求失败！");
            });
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
  }
}
</script>

<style scoped>
@import "../assets/css/bingqu.css";
</style>
