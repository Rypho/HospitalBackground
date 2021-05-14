//添加病区
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
      <div id="t1">病区管理 / 病区详情</div>
      <div id="t2">院区管理员，欢迎进入</div>
      <router-link to="login"><div id="t3"><img src="../assets/pic/退出.png" class="img2" height="18" width="18"/>退出登录</div></router-link>
    </div>
    <div id="content">
      <div id="blank" style="height:500px;width:95%;background-color: white;margin-left: 25px;margin-top: 15px">
        <div>
          <el-tag style="float: left;margin-left: 20px;margin-top: 15px">病区基本信息</el-tag>
          <div class="form" style="">
            病区名:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input style=""
            type="text" name="name" v-model="name" placeholder="     请输入病区名"/></input>
            所属科室:<input style=""
            type="text" name="keshi" v-model="keshi" placeholder="     请输入科室"/></input><br>
            病区负责人:<input style=""
            type="text" name="fuze" v-model="fuze" placeholder="     请输入负责人"/></input>
            联系电话:<input style=""
            type="text" name="phone" v-model="phone" placeholder="     请输入电话"/></input><br>
            病区位置:&nbsp&nbsp&nbsp<input style="height: 50px;width: 400px"
            type="text" name="palce" v-model="place" placeholder="     请输入位置"/></input><br>
            <el-button size="mini" type="primary" style="margin-top: 10px;margin-right: 280px;height: 25px" @click="addUser">确认保存</el-button>
          </div>
        </div>
        <el-tag style="float: left;margin-left: 20px;margin-top: 75px">病房信息</el-tag>
        <div style="margin-top: -40px;" class="form1">
          <div class="form" style="">
            <el-button size="mini" type="primary" style="height: 25px;text-align: center;margin-left: -180px;margin-top: 10px;" @click="">添加病房</el-button>
            &nbsp&nbsp病房数:30
            &nbsp&nbsp床位数:80<br>
          </div>
        </div>
        <el-card style="width: 380px;height: 120px;margin-top: 170px;margin-left: 50px;">
          <i class="el-icon-s-home" style="color:dodgerblue;float: left"></i>
          <label style="float: left;margin-left: 5px;">病房名：01病房</label>
          <label style="float: left;margin-left: 10px;">蓝牙网关编号：E101020202</label>
          <el-button size="mini" type="danger" style="height: 25px;font-size: 10px;margin-left: 10px;margin-top: -10px;" @click="handleDelete(scope.row.id)">删除</el-button>
          <label style="float: left;margin-left: 10px;font-size: 11px">床位信息</label>
          <el-button size="mini" type="primary" style="height: 24px;font-size: 10px;margin-left: -10px;margin-top: -10px;" @click="handleDelete(scope.row.id)">添加床位</el-button>
        </el-card>
        <el-card style="width: 380px;height: 120px;margin-left: 550px;float: left;margin-top: -125px;">
          <i class="el-icon-s-home" style="color:dodgerblue;float: left"></i>
          <label style="float: left;margin-left: 5px;">病房名：02病房</label>
          <label style="float: left;margin-left: 10px;">蓝牙网关编号：E101020203</label>
          <el-button size="mini" type="danger" style="height: 25px;font-size: 10px;margin-left: 10px;margin-top: -10px;" @click="handleDelete(scope.row.id)">删除</el-button>
          <label style="float: left;margin-left: 10px;font-size: 11px">床位信息</label>
          <el-button size="mini" type="primary" style="height: 24px;font-size: 10px;margin-left: -10px;margin-top: -10px;" @click="handleDelete(scope.row.id)">添加床位</el-button>
        </el-card>
      </div>
      <div id="foot">Copyrigth @ 2020. All Rigths Reserved. 杭州小为智能科技有限公司 版权所有 v1.0.0</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'hello',
  data () {
    return {
      user: {
        name: '',
        keshi: '',
        fuze: '',
        phone: '',
        place: '',//添加病区数据
        result: ""
      }
    }
  },

  methods: {
    //添加病区信息
    addUser() {
      const name = this.name;const keshi = this.keshi;
      const fuze = this.fuze;const phone = this.phone;
      const place = this.place;
      axios.post('/api/user/add', {
        name: name, keshi: keshi,
        fuze: fuze, phone: phone,
        place: place,
      },{}).then(res => {
        this.$message.success('添加成功')
        this.$router.push("/bingqu");
      })
    }
  }
}
</script>

<style scoped>
@import "../assets/css/bingqu0.css";
</style>
