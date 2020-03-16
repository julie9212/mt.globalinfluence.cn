import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

import Vant from 'vant';
import 'vant/lib/index.css';

import api from './api'



Vue.config.productionTip = false
// Vue.use(MintUI)
Vue.use(Vant)
Vue.use(api)

new Vue({
  el:"#app",
  router,
  render: h => h(App)
})
