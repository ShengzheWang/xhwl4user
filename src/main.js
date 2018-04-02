/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Social from './components/Social.vue'
import Router from 'vue-router'
import './components/XhwlHeader.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './main.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Router)
const routes = [
  { path: '', component: Home },
  { path: '/Social', component: Social },
  { path: '/Campus/Post', component: Social },
  { path: '/Campus/Procedure', component: Social },
  { path: '/Campus/Plan', component: Social },
  { path: '/Trainee', component: Social },
  { path: '/AboutUs', component: Social }

]
const router = new Router({
  routes // （缩写）相当于 routes: routes
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
