import Vue from 'vue'
import VueRouter from 'vue-router'
import Routers from './routers/index'

Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: Routers
})
