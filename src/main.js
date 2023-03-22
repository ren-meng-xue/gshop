// 入口js
import Vue from 'vue'
import App from './app'
import router from './router'
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
