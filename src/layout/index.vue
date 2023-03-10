<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view :key="key"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  computed: {
    key() {
    return  this.$route.path
  },
  },
  
};
</script>

<style lang="less" scoped>
.el-container {
  width: 100vw;
  height: 100vh;
}
</style>