/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from 'qs'
import './components/XhwlHeader.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/animate.css'
import '../static/css/main.css'
import '../static/css/iconfont.css'
import '../static/css/reformat.css'
import router from './router/index.js'
import Router from 'vue-router'
import Vuelazyload from 'vue-lazyload'

import '@/styles/index.scss' // global css

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuelazyload, {
  loading: require('../static/img/loading.gif'),
    // '../static/img/aboutUs/2.jpg',
    // '../static/img/aboutUs/3.jpg',
    // '../static/img/aboutUs/4.jpg',
    // '../static/img/aboutUs/5.jpg',
    // '../static/img/aboutUs/6.jpg',
    // '../static/img/aboutUs/7.jpg',
    // '../static/img/aboutUs/8.jpg',
    // '../static/img/aboutUs/9.jpg',
    // '../static/img/aboutUs/10.jpg',
    // '../static/img/aboutUs/11.jpg',
    // '../static/img/aboutUs/12.jpg',
    // '../static/img/aboutUs/13.jpg',
    // '../static/img/aboutUs/14.jpg',
    // '../static/img/aboutUs/15.jpg',
    // '../static/img/aboutUs/16.jpg',
    // '../static/img/aboutUs/17.jpg',
    // '../static/img/aboutUs/18.jpg',
    // '../static/img/aboutUs/19.jpg',
    // '../static/img/aboutUs/20.jpg')
})

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.use(Router)
new Vue({
  el: '#app',
  router,
  created () {
    this.$axios.defaults.baseURL = 'http://121.42.166.132:8080'
  },
  components: { App },
  template: '<App/>'
})
