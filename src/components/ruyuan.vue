//入院管理
<template>
  <div id="back">
    <div id="left">
      <div id="li">
        <img src="../assets/pic/管理.png" height="25" width="28" style="position: relative;top: 7px;left: -7px"/>管理平台</div>
      <div id="menu">
        <el-menu>
          <router-link to="home"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/首页.png" class="img1" height="17" width="17"/>首页</el-menu-item></router-link>
          <router-link to="bingqu"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/病区.png" class="img1" height="17" width="17"/>病区管理</el-menu-item></router-link>
          <router-link to="ruyuan"><el-menu-item class="liLevel" style="color: #3e99ff;font-size:11px;"><img src="../assets/pic/入院1.png" class="img1" height="17" width="17"/>入院管理</el-menu-item></router-link>
          <router-link to="jianhu"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/监护.png" class="img1" height="17" width="17"/>监护看板</el-menu-item></router-link>
          <router-link to="history"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/历史.png" class="img1" height="17" width="17"/>监护历史</el-menu-item></router-link>
          <router-link to="control"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/管理员.png" class="img1" height="17" width="17"/>管理员管理</el-menu-item></router-link>
        </el-menu>
      </div>
    </div>
    <div id="top">
      <div id="t1">入院管理</div>
      <div id="t2">院区管理员，欢迎进入</div>
      <router-link to="login"><div id="t3"><img src="../assets/pic/退出.png" class="img2" height="18" width="18"/>退出登录</div></router-link>
    </div>
    <div id="content">
      <div style="height:500px;width:95%;margin-left: 25px;margin-top: 15px">
      <el-card class="box-card">
        <el-button size="mini" style="margin-bottom: 20px;float: left;margin-left: 10px" @click="handleDelete(scope.row.id)">批量出院</el-button>
        <el-button size="mini" style="margin-bottom: 20px;float: left;margin-left: 10px" @click="addb(scope.$index, scope.row)">批量入院</el-button>
        <el-button size="mini" type="primary" style="margin-bottom: 20px;float: left;margin-left: 10px" @click="addb(scope.$index, scope.row)">入院登记</el-button>
        <el-button size="mini" type="primary" style="margin-bottom: 20px;float: left;margin-left: 10px" @click="">设置警报预警</el-button>
        <el-button type="primary" icon="el-icon-search" @click="onSearch" style="font-size: 11px;float: right;height: 35px;">搜索</el-button>
        <div style="float: right;margin-bottom: 10px;">
            <el-select
              v-model="searchdata1"  style="margin-right: 10px;width: 150px;" placeholder="全部病区">
              <el-option style="margin-left: 15px;"
                         v-for="item in options1"
                         :key="item.key"
                         :label="item.label"
                         :value="item.key"></el-option>
            </el-select>
            <el-select v-model="searchdata2"  collapse-tags
                       style=" margin-right: 10px;width: 100px;" placeholder="全部科室">
              <el-option style="margin-left: 15px;"
                         v-for="item in options2"
                         :key="item.key"
                         :label="item.label"
                         :value="item.key">
              </el-option>
            </el-select>
          <el-input clearable style="width: 80px;"
                    multiple v-model="searchdata" placeholder="床号">
          </el-input>
        </div>
        <el-table
          :data="tableData"
          border
          stripe
          cell-style="padding:5px"
          style="width: 100%;font-size: 12px "
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="id" label="床号" align="center"></el-table-column>
          <el-table-column prop="name" label="姓名" align="center"></el-table-column>
          <el-table-column prop="bnum" label="病人编号" align="center"></el-table-column>
          <el-table-column prop="tnum" label="体温贴编号" align="center"></el-table-column>
          <el-table-column prop="high" label="高温报警值(℃)" align="center"></el-table-column>
          <el-table-column label="操作" align="center" width="350">
            <template slot-scope="scope" class="active" width="350">
              <el-button size="mini" @click="handleDelete(scope.row.id)">出院</el-button>
              <el-button size="mini" type="success" @click="handshow(scope.$index, scope.row)">切换体温贴</el-button>
              <el-button size="mini" type="primary" @click="handshow(scope.$index, scope.row)">设置报警</el-button>
              <el-button size="mini" type="danger" @click="handshow(scope.$index, scope.row)">停止监护</el-button>
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
      //搜索数据
      searchdata:"",
      searchdata1: "",
      searchdata2: "",
      currentPage: 1, //当前页数
      pageSize: 6, //每页获取条数
      getSearchInfo:[],
      tableData: [], //存放从后端传来的数据
      //选择器
      options1: [{key: '0', label: '全部病区'},
        {key: '1', label: '妇产科第一病区'},
        {key: '2', label: '妇产科第二病区'},
        {key: '3', label: '新生儿科第一病区'},
        {key: '4', label: '新生儿科第二病区'},
      ],
      value1: [],
      options2: [{key: '0', label: '全部科室'},
        {key: '1', label: '产科'},
        {key: '2', label: '妇科'},
        {key: '3', label: '新生儿科'},
      ],
      value2: [],
    };
  },
  created() {
    this.searchdata1 = this.options1[1].key
    this.searchdata2 = this.options2[1].key
  },
  mounted() {
    this.getData();
  },
  methods: {
    //获取数据库数据
    getData() {
      axios.get("api/user/showB")
        .then(
          res => {
            this.tableData = res.data;
          },
          res => {
            console.log("error");
            this.$message.error("请求失败！");
          }
        );
    },
    //搜索
    onSearch(){
      if (this.searchdata == "") {
        this.$message.warning("查询条件不能为空！");
        this.getData();
        return;
      }
      const id = this.searchdata;
      axios.post("api/user/searchB",{id:id})
        .then(
          response => {
            this.tableData = response.data;
            this.$message.success("查询成功");
          },
          res => {
            console.log("error");
            this.$message.error("请求失败！");
          }
        );
    },
    //删除
    handleDelete(id){
      //提示框
      this.$confirm("是否确认该病人出院?", "警告", {
        confirmButtonText: "是",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const data = { id:id };
          axios.post("api/user/delB", data)
            .then(res => {
              this.getData(); //删除数据后重新获取数据
              this.$message.success("出院成功");
            })
            .catch(() => {
              this.$message({
                type:"warning",
                message:"请求失败，请检查网络设置"
              })
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
  }
}
</script>
<style scoped>
@import "../assets/css/ruyuan.css";
</style>
