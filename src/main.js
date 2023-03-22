import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
console.log(store,'store');
// var vue = new Vue({
//   el: '#app',
//   render: h => h(App),
//   router,
//   store
// })
// console.log(vue,'vvvvv')


new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')