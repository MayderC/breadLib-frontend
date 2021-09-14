import { createRouter, createWebHashHistory } from 'vue-router'
import BHome from '../views/BHome.vue'
import BProducts from '../views/BProducts.vue'
import BAdmin from '../views/BAdmin.vue'

const routes = [
  {
    path: '/',
    name: 'BHome',
    component: BHome
  
  }, 
  {
    path: '/products',
    name: 'BProducts',
    component: BProducts
  },
  {
    path: '/qwerty',
    name: 'BAdmin',
    component: BAdmin,
    children:[
      {
        path: 'product'
      },
      {
        path : 'typeproduct'
      },
      {
        path: 'order'
      }
    ] 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
