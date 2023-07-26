import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import iss from '../views/ISS.vue'
import CelestialChart from '../views/CelestialChart.vue'
import SpaceInvaders from '../views/SpaceInvaders.vue'
import Weather from '../views/Weather.vue'

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
    { 
      path: '/iss-tracker', 
      component: iss
    },
    { 
      path: '/blog', 
      component: Blog 
    },
    { 
      path: '/charts', 
      component: CelestialChart
    },
    { 
      path: '/game', 
      component: SpaceInvaders
    }, 
    {
      path: '/weather',
      component: Weather
    }
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'pagenotfound',
    //   component: PageNotFound
    // }
  ]
})

export default router