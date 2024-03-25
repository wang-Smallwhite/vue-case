<template>
  <div class="header_container">
    <div>Vue Case</div>
    <div class="login_out" @click="loginOut()">Login out</div>
  </div>
</template>

<script>
  import {removeToken} from '@/utils/auth'
  import router, { resetRouter } from '@/router'
  export default {
    

    methods: {
      loginOut() {
        removeToken()
        resetRouter()
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="less" scoped>
.header_container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .login_out {
    color: #409EFF;
  }
}
</style>