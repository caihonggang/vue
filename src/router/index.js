import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Gw  from '../views/Gw'
import  Fl from '../views/Fl'
import Wd from '../views/Wd'


Vue.use(VueRouter)

const routes = [
{path:'/Index',component:Index},
{path:'/Wd',component:Wd},
{path:'/Gw',component:Gw},
{path:'/Fl',component:Fl}



    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
