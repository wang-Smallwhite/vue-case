/**
 * 动态加载百度地图api函数
 * @param {String} ak  百度地图AK，必传
 */
 export function loadBMap(ak) {
  return new Promise((resolve, reject) => {
    if (typeof window.BMap !== "undefined") {
      resolve(window.BMap);
      return true;
    }
    window.onBMapCallback = function () {
      resolve(window.BMap);
      return true;
    };
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      `https://api.map.baidu.com/api?v=3.0&ak=${ak}&callback=onBMapCallback&s=1`;
    script.onerror = reject;
    document.head.appendChild(script);
    return true;
  });
}


/**
 * import loadBMap from '../../utils/Bmap.js'
 *  mounted() {
    const p = loadBMap("avLRraGNrFqaHA7j71ekPL2KYw9F6VG8")
    p.then(()=>{
      this.initMap()
    })
  },

    methods: {
    // 初始化地图
    initMap() {
      console.log('地图初始化')
      const that = this;
      this.map = new window.BMap.Map("map-container")
      this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    }
  },
*/



/**
 * BmapGL
 * 
*/

export function BMPGL(ak) {
  return new Promise((resolve, reject) => {
    window.init = function () {
      // eslint-disable-next-line
      resolve(BMapGL)
    };
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${ak}&callback=init`;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}


/**
 * initMap() {
      console.log('地图初始化')
      const that = this;
      console.log(window.BMapGL)
      this.map = new window.BMapGL.Map("map-container")
      this.map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);
    }
 * 
 * 
*/