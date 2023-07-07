<template>
  <div>
    <vModel v-model="myValue"></vModel>
    <p>value: {{ myValue }}</p>
  </div>
</template>

<script>
  import vModel from '../../components/vModel.vue';
  export default {
    components: {
      vModel: vModel
    },
    data() {
      return {
        myValue: ''
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>

</style>