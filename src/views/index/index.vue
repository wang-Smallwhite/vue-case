<template>
  <div>
    <div @click="loginOut">退出</div>
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

<style lang="scss" scoped>

</style>