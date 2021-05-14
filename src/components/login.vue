//登录页
<template>
  <div >
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="">富阳幼妇保健院</h3>
      <div class="login-title" style="font-size: 14px">连续体温监护管理平台</div>
      <el-form-item label="账号" prop="username" style="margin-top: 20px;margin-left: -15px;">
        <el-input type="text" placeholder="输入用户名"  v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password" style="margin-top: 30px;margin-left: -15px;">
        <el-input type="password" placeholder="输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button style="margin-left: -70px;margin-top: 30px;margin-bottom: 10px;" type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请输入用户名和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div id="foot">Copyrigth @ 2020. All Rigths Reserved. 杭州小为智能科技有限公司 版权所有 v1.0.0</div>
  </div>

</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: '',//用户名
        password: '',//密码
      },
      // 表单验证
      rules: {
        username: [
          {required: true, message: '用户名不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      },
      dialogVisible: false//对话框隐藏
    }
  },
  methods: {
    //点击登录
    onSubmit(formName) {
      //绑定验证
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/home");
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
@import "../assets/css/login.css";
</style>
