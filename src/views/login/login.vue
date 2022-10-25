<template>
  <div class="login_contain">
    <div class="login_box">
      
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {

    }
  }
</script>

<style lang="less" scoped>
  .login_contain {
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/img/iTab-lq8jp2.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    .login_box {
      position: absolute;
      top: 0; bottom: 0;
      left: 0; right: 0;
      width: 600px;
      height: 400px;
      line-height: 2;
      margin: auto;
      border-radius: 5px;
      background: rgba(255, 255, 255, .3);
      box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
      overflow: hidden;
    }
    .login_box::before {
      content: '';
      position: absolute;
      left: 0;top: 0; right: 0;bottom: 0;
      filter: blur(20px);
      z-index: -1;
    }
  }
</style>