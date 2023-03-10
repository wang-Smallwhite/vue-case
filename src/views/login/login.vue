<template>
  <div class="login_contain">
    <div class="login_box">
      <div class="title">Vue - layout</div>

      <el-form
        :model="loginFrom"
        ref="form"
        :rules="loginRules"
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-form-item label="用户名：" prop="username">
          <el-input
            class="input_font"
            v-model="loginFrom.username"
            ref="username"
            placeholder="请填写用户名"
            name="username"
            type="text"
            tabindex="1"
          >
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            class="input_font"
            ref="password"
            v-model="loginFrom.password"
            type="password"
            placeholder="请填写密码"
            name="password"
            tabindex="2"
            show-password
            @keyup.native="checkCapslock"
            @keyup.enter.native="onSubmit"
          >
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码：">
          <template>
            <div >
              <el-input v-model="loginFrom.code" class="code_input" size="normal" clearable></el-input>
              <div v-html="imgCode" class="code_box" ></div>
            </div>
          </template>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { removeToken, getToken } from '@/utils/auth'
import api from '@/api/index'
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!(value)) {
        callback(new Error('用户名不为空'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('密码不少于六位'))
      } else {
        callback()
      }
    }
    return {
      loginFrom: {
        username: "",
        password: "",
        code: ''
      },
      imgCode: '',
      codevalue: '',
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
    };
  },
  created() {
    this.getCap()
  },
  methods: {
    getCap() {
      api.getCaptcha().then(res=>{
        this.imgCode = res.data;
        this.codevalue = res.text;
      })
    },
    showPas() {
      if(this.passwordType == 'password') {
        this.passwordType = '';
      }else {
        this.passwordType = 'password'
      }
      this.$nextTick(()=>{
        this.$refs.password.focus()
      })
    },

    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },

    onSubmit() {
      this.$refs.form.validate(valid =>{
        if(valid) {
          this.$store.dispatch('user/login', this.loginFrom).then(()=>{
            this.$router.push('/').catch(()=>{})
            console.log(this.$router)
          })
        }else {
          return false
        }
      })
    },
  }
};
</script>

<style lang="less" scoped>
@import '../../styles/variables.less';
.login_contain {
  width: 100vw;
  height: 100vh;
  // background-image: url(../../assets/img/iTab-lq8jp2.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  .login_box {
    padding: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 600px;
    height: 400px;
    line-height: 2;
    margin: auto;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    .title {
      margin-bottom: 30px;
      font-size: 30px;
      text-align: center;
      font-weight: 800;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }
    .el-input {
      width: 85%;
      
    } 
    .code_input {
      width: 120px;
    }
    .code_box {
      display: inline-block;
      vertical-align: top;
      height: 45px;
    }
    /deep/ .el-input__inner {
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 1px;    
    }
  }
  .login_box::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    filter: blur(20px);
    z-index: -1;
  }
}

</style>