import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/Product.vue'
import Textile from '../views/Industry/Textile/Textile.vue'
import DayTransaction from '@/views/Comp/DayTransaction.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/macro/:product/',
    name:'Product',
    component: Product
  },

  {
    path: '/Industry/Textile',
    name:'Textile',
    component: Textile
  },
  {
    path: '/comp/:stockid/DayTransaction',
    name:'DayTransaction',
    component: DayTransaction
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
