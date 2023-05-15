<template>
  <div v-loading="loading" class="container">
    <div @click="clickk">案例</div>
    <!-- <loading v-if="loading"></loading> -->
  </div>
</template>

<script>
  import loading from '@/components/loading'
  export default {
    components: {
      loading
    },
    data() {
      return {
        loading: true
      }
    },
    mounted() {
      setTimeout(() =>{
        this.loading = false
      }, 5000)
    },
    methods: {
      clickk() {
        console.log('点击');
      },
    }
  }
    
  
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>