//首页
<template>
  <div id="back">
    <div id="left">
      <div id="li">
        <img src="../assets/pic/管理.png" height="25" width="28" style="position: relative;top: 7px;left: -7px"/>管理平台</div>
      <div id="menu">
        <el-menu>
          <router-link to="home"><el-menu-item class="liLevel" style="color: #3e99ff;font-size:11px;"><img src="../assets/pic/首页1.png" class="img1" height="17" width="17"/>首页</el-menu-item></router-link>
          <router-link to="bingqu"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/病区.png" class="img1" height="17" width="17"/>病区管理</el-menu-item></router-link>
          <router-link to="ruyuan"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/入院.png" class="img1" height="17" width="17"/>入院管理</el-menu-item></router-link>
          <router-link to="jianhu"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/监护.png" class="img1" height="17" width="17"/>监护看板</el-menu-item></router-link>
          <router-link to="history"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/历史.png" class="img1" height="17" width="17"/>监护历史</el-menu-item></router-link>
          <router-link to="control"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/管理员.png" class="img1" height="17" width="17"/>管理员管理</el-menu-item></router-link>
        </el-menu>
      </div>
    </div>
    <div id="top">
      <div id="t1">首页</div>
      <div id="t2">院区管理员，欢迎进入</div>
      <router-link to="login"><div id="t3"><img src="../assets/pic/退出.png" class="img2" height="18" width="18"/>退出登录</div></router-link>
    </div>
    <div id="content">
      <div id="tit">欢迎进入富阳妇幼保健院连续体温监护管理平台</div>
      <div id="logo" style="margin-top: 30px"><img src="../assets/pic/首页logo.png" height="240" width="420"/></div>
      <div id="foot">Copyrigth @ 2020. All Rigths Reserved. 杭州小为智能科技有限公司 版权所有 v1.0.0</div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
@import "../assets/css/home";
</style>






