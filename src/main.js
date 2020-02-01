import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import'mint-ui/lib/style.css'
import axios from 'axios'

Vue.prototype.axios=axios
Vue.use(MintUI)
axios.defaults.baseURL='http://123.207.32.32:8000'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
