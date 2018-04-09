/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Social from './components/Social.vue'
import Campus from './components/Campus.vue'
import Trainee from './components/Trainee.vue'
import MyResume from './components/MyResume.vue'
import ResumeForm from './components/ResumeForm.vue'
import MyJobApplication from './components/MyJobApplication.vue'
import AboutUs from './components/AboutUs.vue'

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
import './components/XhwlHeader.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/animate.css'
import './main.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Router)
const routes = [
  { path: '', component: Home },
  { path: '/Social', component: Social },
  { path: '/Campus/Post', component: Campus },
  { path: '/Campus/Procedure', component: Social },
  { path: '/Campus/Plan', component: Social },
  { path: '/Trainee', component: Trainee },
  { path: '/AboutUs', component: null },
  { path: '/MyResume', component: MyResume },
  { path: '/MyJobApplication', component: MyJobApplication },
  { path: '/ResumeForm',
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
  components: { App },
  template: '<App/>'
})
