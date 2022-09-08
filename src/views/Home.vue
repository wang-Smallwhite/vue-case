<template>
  <div>
    <p>深浅拷贝</p>

    <p @click="copyClick">拷贝按钮</p>
  </div>
</template>

<script>
  import {copyArr, deepCopy, _debounce} from '../utils/tools';
  export default {
    data() {
      return {
        list: [1, 2, 3, 4, 5],
        obj: {
          name: 'wh',
          age: 19,
        }
      }
    },
    mounted() {
      
    },
    methods: {
      copyClick: _debounce(function(e) {
        let obj1 = deepCopy(this.obj);
        let obj2 = this.obj;
        this.obj.name = 'zy'
        console.log(obj1, obj2)

        let list1 = copyArr(this.list)
        let list2 = this.list
        this.list.push(6);
        console.log(list1, list2)
      }, 300)
    },
    
  }
</script>

<style lang="scss" scoped>

</style>
