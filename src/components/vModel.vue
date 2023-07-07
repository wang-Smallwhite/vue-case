<template>
  <div>
    <input type="text" :value="enterValue" @input="updateValue($event.target.value)">
  </div>
</template>

<script>
  export default {
    props: {
      enterValue: ''
    },
    methods:{
      updateValue(newValue) {
        this.$emit('input', newValue);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>