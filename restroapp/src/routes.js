import{createRouter,createWebHistory} from 'vue-router'
import HeroPage from './components/HeroPage.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
const routes = [
  {  name:'HeroPage',
    path :'/',
component:HeroPage, 
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