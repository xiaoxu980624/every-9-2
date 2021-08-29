import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'

// console.log(baseUrl);
Vue.config.productionTip = false
// 移动端适配
// import 'lib-flexible/flexible.js'
import 'regenerator-runtime/runtime'
// import { config } from 'vue/types/umd'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
