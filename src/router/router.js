import { createRouter, createWebHistory } from "vue-router";
import main from '../pages/main'
import institution from '../pages/institution'
import profile from '../pages/profile'
import login from '../pages/login'
import registration from '../pages/registration'
let route = [
  {path: '/', component: main}, {path: '/login', component: login},
  {path: '/profile', component: profile}, {path: '/institution', component: institution},
  {path: '/registration', component: registration}
]
let router = createRouter({
  history: createWebHistory(),
  routes: route
})
export default router