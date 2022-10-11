/**
 * @function 创建XMLHttpRequest 兼容IE7 一下
 * @return xmlhttpRequest object
*/
function createXHR() {
  if(typeof XMLHttpRequest !== "undefined") {
    return new XMLHttpRequest();
  }else if (typeof ActiveXObject !== "undefined") {
    if (typeof arguments.callee.activeXString != 'string') {
    let versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"], i, len;
    for (i = 0, len = versions.length; i++;) {
      try {
        new ActiveXObject(versions[i]);
        arguments.callee.activeXString = versions[i];
        break;
      } catch (ex) {
        // 跳过
      }
    }
  }
  return new ActiveXObject(arguments.callee.activeXString)
  }else {
    throw new Error("NO XHR object avaliable")
  }
  
}