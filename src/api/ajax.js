/**
 *
 * ajax请求函数模块
 * 返回值promise对象（异步返回的数据是response.data）
 */
import axios from 'axios';

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求

    let promise
    if (type === 'GET') {
      // 处理data={} 将参数拼接到url后面
      let dataStr = ''// 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        // 从下标0开始，从最后截取 把问号拼接到url上
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    // 成功了调用resolve
    // 失败了调用reject
    promise.then((response) => {
      // 成功的结果
      resolve(response.data)
    }).catch(error => {
      console.error(error)
      reject(error)
    })
  })
}

// let obj = {
//   name: '张三',
//   age: 12,
//   sex: '男'
// }
// console.log(Object.keys(obj));// ['name', 'age', 'sex']
// Object.keys(obj).forEach(item => {
//   obj[item] // 获取的是张三
// })
