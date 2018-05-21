
import Router from 'vue-router'
import Home from '../components/headerRouters/Home.vue'
import Social from '../components/headerRouters/Social.vue'
import Campus from '../components/headerRouters/Campus.vue'
import Trainee from '../components/headerRouters/Trainee.vue'
import ResumeDetails from '../components/headerRouters/ResumeDetails.vue'
import AboutUs from '../components/headerRouters/AboutUs.vue'

import MyResume from '../components/mineRouters/MyResume.vue'
import ResumeForm from '../components/mineRouters/ResumeForm.vue'
import MyJobApplication from '../components/mineRouters/MyJobApplication.vue'

import FormBasicInformation from '../components/Forms/FormBasicInformation.vue'
import FormEducationalExperience from '../components/Forms/FormEducationalExperience.vue'
import FormAttachment from '../components/Forms/FormAttachment.vue'
import FormJobIntention from '../components/Forms/FormJobIntention.vue'
import FormProjectExperience from '../components/Forms/FormProjectExperience.vue'
import FormRewardsAndActivities from '../components/Forms/FormRewardsAndActivities.vue'
import FormSelfEvaluation from '../components/Forms/FormSelfEvaluation.vue'
import FormTraineeExperience from '../components/Forms/FormTraineeExperience.vue'
import FormTrainingExperience from '../components/Forms/FormTrainingExperience.vue'
import FormWorkExperience from '../components/Forms/FormWorkExperience.vue'

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
      {path: '/ResumeForm/a', component: FormAttachment}]
  }
 ]

export default new Router({
  routes // （缩写）相当于 routes: routes
})

// export default new Router({
//   routes: [
//     {
//       // path: '/',
//       // name: 'XhwlHeader',
//       // component: XhwlHeader
//     }
//   ]
// })
