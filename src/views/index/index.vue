<template>
  <div>
    <div id="map-container" class="map_container"></div>
  </div>
</template>

<script>
import {loadBMap, BMPGL} from '../../utils/Bmap.js'
export default {
  data() {
    return {

    };
  },
  mounted() {
    const p = BMPGL("avLRraGNrFqaHA7j71ekPL2KYw9F6VG8")
    p.then(()=>{
      this.initMap()
    }) 
  },
  methods: {
    // 初始化地图
    initMap() {
      console.log('地图初始化')
      const that = this;
      console.log(window.BMapGL)
      this.map = new window.BMapGL.Map("map-container")
      this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);
    }
  },
};
</script>

<style lang="less" scoped>
.map_container {
  width: 100%;
  height: 400px;
}
</style>