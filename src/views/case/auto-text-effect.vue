<template>
  <div>
    <h1 @click="log">{{ autoText }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'We Love Programming!',
        idx: 1,
        speed: 300,
        autoText: "",
        timer: null,
      }
    },
    mounted() {
      this.writeText()
    },
    methods:{
      writeText(){
        this.autoText = this.text.slice(0, this.idx)
        this.idx++;
        if(this.idx > this.text.length) {
          clearTimeout(this.timer)
          return
        }
        this.timer = setTimeout(this.writeText, this.speed);
      },
      log() {
        console.log(this.timer);
      }
    },
    destroyed() {
      clearTimeout()
    },
  }
</script>

<style lang="less" scoped>

</style>