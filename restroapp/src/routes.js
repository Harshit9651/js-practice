import{createRouter,createWebHistory} from 'vue-router'
import LandingPage from '../src/components/LandingPage.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
const routes = [
  {  name:'LandingPage',
    path :'/',
component: LandingPage
},
{
    name:'SignIn',
    path:'/SignIn',
    component:SignIn
},
{
    name:'SignUp',
    path:'/SignUp',
    component :SignUp
}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router