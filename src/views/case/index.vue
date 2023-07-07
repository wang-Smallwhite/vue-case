<template>
  <div  class="container">
    <div @click="clickk">案例</div>
    <!-- <loading v-if="loading"></loading> -->
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
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
    computed: {
      ...mapState(['user'])
    },
    mounted() {
      console.log(this.$store)
      setTimeout(() =>{
        this.loading = false
      }, 5000)
    },
    methods: {
      ...mapMutations('user', ['SET_NAME']),
      clickk() {
        this.SET_NAME('1233223')
        console.log('点击', this.user);

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