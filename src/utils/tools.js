/*
* @function 节流
* 是指一定时间内执行的操作只执行一次，也就是说即预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期，一个比较形象的例子是如果将水龙头拧紧直到水是以水滴的形式流出，那你会发现每隔一段时间，就会有一滴水流出。
* scroll 事件，单位时间后计算一次滚动位置
input 事件（上面提到过）
播放事件，计算进度条
*/
export function _throttle(fn, threshhold = 200) {
  let timeout;
  // 计算开始时间
  let start = new Date();
  return function () {
    // 触发时间
    const current = new Date() - 0;
    timeout && clearTimeout(timeout);
    // 如果到了时间间隔点，就执行一次回调
    if (current - start >= threshhold) {
      fn.call(this, ...arguments);
      // 更新开始时间
      start = current;
    } else {
      // 保证方法在脱离事件以后还会执行一次
      timeout = setTimeout(fn.bind(this), threshhold, ...arguments);
    }
  }
}

/*
* @function 防抖 
* 是指在一定时间内，在动作被连续频繁触发的情况下，动作只会被执行一次，也就是说当调用动作过n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间，所以短时间内的连续动作永远只会触发一次。
* 短信验证码
提交表单
resize 事件
input 事件（当然也可以用节流，实现实时关键字查找）
*/
export function _debounce(fn, delay = 200) {
  let timeout;
  return function () {
    // 重新计时
    timeout && clearTimeout(timeout);
    timeout = setTimeout(fn.bind(this), delay, ...arguments);
  }
}

// 深拷贝对象
const deepCopy = (obj) => {
  // 只拷贝对象
  if (typeof obj !== 'object') return obj
  // 根据obj的类型判断是新建一个数组还是对象
  const newObj = obj instanceof Array ? [] : {}
  // 遍历obj，并且判断是obj的属性才拷贝
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 如果obj的子属性是对象，则进行递归操作,否则直接赋值
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}
// 深拷贝数组
export function copyArr(arr) {
  const res = []

  for (let i = 0; i < arr.length; i++) {
    res.push(deepCopy(arr[i]))
  }
  return res
}

export { deepCopy }