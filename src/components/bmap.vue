<template>
  <div>
    <div id="map-container" class="map_container"></div>
    <div @click="draw()">多边形绘制</div>
    <button @click="clear">清空所有多边形</button>
    <button @click="clearLast" :disabled="isDisable">清空上一个多边形</button>
  </div>
</template>

<script>
import {loadBMap, loadBaiDuMap, loadBaiDuDrawMap} from '../utils/Bmap.js'
export default {
  data() {
    return {
      drawingType: '',
      drawingManager: '',
      isDisable: false,
      styleOptions: {
        strokeColor: '#5E87DB',   // 边线颜色
        fillColor: '#5E87DB',     // 填充颜色。当参数为空时，圆形没有填充颜色
        strokeWeight: 2,          // 边线宽度，以像素为单位
        strokeOpacity: 1,         // 边线透明度，取值范围0-1
        fillOpacity: 0.2          // 填充透明度，取值范围0-1
      },
    };
  },
  mounted() {
    const p = loadBaiDuMap("avLRraGNrFqaHA7j71ekPL2KYw9F6VG8")
    p.then(()=>{
      this.initMap()
    }) 
  },
  methods: {
    // 初始化地图
    initMap() {
      loadBaiDuDrawMap().then((BMapGL) => {
        this.map = new BMapGL.Map("map-container");
        const point = new BMapGL.Point(114.031761, 22.542826);
        // 初始化地图，设置中心点坐标和地图级别
        this.map.centerAndZoom(point, 19);
        //开启鼠标滚轮缩放
        this.map.enableScrollWheelZoom(true);
      });
    },
    draw(type) {
      const drawingManager = new BMapGLLib.DrawingManager(this.map, {
        rectangleOption: this.styleOptions
      });
      drawingManager.setDrawingMode(BMAP_DRAWING_POLYGON);
      drawingManager.open()

      drawingManager.addEventListener("polygoncomplete", (e) => {
        this.polygons.push(e);
        this.polygonPaths.push(e.getPath());

        if (this.polygons.length > 1) {
          this.isDisable = false;
        }
      });
    },

    clear() {
      this.map.clearOverlays();
      this.polygons = [];
      this.polygonPaths = [];
    },

    clearLast() {
      const overlays = this.map.getOverlays();
      let length = overlays.length;
      const lastOverlay = overlays[length - 1];

      this.map.removeOverlay(lastOverlay);
      if (length <= 2) {
        this.isDisable = true;
      }
    },
  }
}
</script>

<style lang="less" scoped>
.map_container {
  width: 100%;
  height: 400px;
}
</style>