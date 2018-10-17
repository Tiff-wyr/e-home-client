
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/index.css'
import axios from './util/axios'
import store from './store/index'
Vue.config.productionTip = false
Vue.prototype.$axios=axios


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
