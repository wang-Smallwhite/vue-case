/**
 * @function {文件导出}
 * @param url {string}
 * @param name {string}
 * @param methodName {string}
 * @param param {string}
*/
export function exportFile(url, name, param, methodName='post') {
  const xhr = new XMLHttpRequest();
  xhr.open(methodName, url, true);
  if(methodName.toLowerCase() == 'get') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  }else if(methodName.toLowerCase() == 'post') {
    xhr.setRequestHeader('Content-Type', 'application/json')
  }
  // xhr.setRequestHeader('')             // token 标识
  xhr.responseType = 'blob';
  xhr.onload = function() {
    const data = xhr.response;
    const blob = new Blob([data]);
    const blobUrl = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = name + '.xls';
    a.href = blobUrl;
    a.click();
  }
  if(methodName.toLowerCase() == 'get') {
    xhr.send()
  }else if(methodName.toLowerCase() == 'post') {
    xhr.send(JSON.stringify(param))
  }
}