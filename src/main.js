
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/index.css'
import axios from './util/axios'
// import './iconfont/iconfont'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
// import './iconfont/iconfont.css'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
