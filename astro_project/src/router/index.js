import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

//import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
        path: '/', 
        component: Home 
    }, 
    { 
        path: '/home', 
        component: Home 
    }, 
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'pagenotfound',
    //   component: PageNotFound
    // }
  ]
})

export default router