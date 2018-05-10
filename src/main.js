/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Home from './components/headerRouters/Home.vue'
import Social from './components/headerRouters/Social.vue'
import Campus from './components/headerRouters/Campus.vue'
import Trainee from './components/headerRouters/Trainee.vue'
import ResumeDetails from './components/headerRouters/ResumeDetails.vue'
import AboutUs from './components/headerRouters/AboutUs.vue'

import MyResume from './components/mineRouters/MyResume.vue'
import ResumeForm from './components/mineRouters/ResumeForm.vue'
import MyJobApplication from './components/mineRouters/MyJobApplication.vue'

import FormBasicInformation from './components/Forms/FormBasicInformation.vue'
import FormEducationalExperience from './components/Forms/FormEducationalExperience.vue'
import FormAttachment from './components/Forms/FormAttachment.vue'
import FormJobIntention from './components/Forms/FormJobIntention.vue'
import FormProjectExperience from './components/Forms/FormProjectExperience.vue'
import FormRewardsAndActivities from './components/Forms/FormRewardsAndActivities.vue'
import FormSelfEvaluation from './components/Forms/FormSelfEvaluation.vue'
import FormTraineeExperience from './components/Forms/FormTraineeExperience.vue'
import FormTrainingExperience from './components/Forms/FormTrainingExperience.vue'
import FormWorkExperience from './components/Forms/FormWorkExperience.vue'

import Router from 'vue-router'
import axios from 'axios'
import qs from 'qs'
import './components/XhwlHeader.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/animate.css'
import '../static/css/main.css'
import '../static/css/iconfont.css'
import '../static/css/banner.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Router)
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
const routes = [
  { path: '', component: Home },
  { path: '/Social', component: Social },
  { path: '/Campus/Post', component: Campus },
  { path: '/Campus/Procedure', component: Social },
  { path: '/Campus/Plan', component: Social },
  { path: '/Trainee', component: Trainee },
  { path: '/ResumeDetails', component: ResumeDetails },
  { path: '/AboutUs', component: AboutUs },
  { path: '/MyResume', component: MyResume },
  { path: '/MyJobApplication', component: MyJobApplication },
  { name: 'ResumeForm',
    path: '/ResumeForm',
    component: ResumeForm,
    children: [{path: '/ResumeForm', component: FormBasicInformation},
      {path: '/ResumeForm/1', component: FormBasicInformation},
      {path: '/ResumeForm/2', component: FormEducationalExperience},
      {path: '/ResumeForm/3', component: FormTrainingExperience},
      {path: '/ResumeForm/4', component: FormProjectExperience},
      {path: '/ResumeForm/5', component: FormWorkExperience},
      {path: '/ResumeForm/6', component: FormTraineeExperience},
      {path: '/ResumeForm/7', component: FormRewardsAndActivities},
      {path: '/ResumeForm/8', component: FormJobIntention},
      {path: '/ResumeForm/9', component: FormSelfEvaluation},
      {path: '/ResumeForm/10', component: FormAttachment}]
  }
]
const router = new Router({
  routes // （缩写）相当于 routes: routes
})
new Vue({
  el: '#app',
  router,
  created () {
    this.$axios.defaults.baseURL = 'http://121.42.166.132:8080'
  },
  components: { App },
  template: '<App/>'
})
