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
