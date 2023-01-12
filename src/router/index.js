import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Hizmetler from '../views/Hizmetler.vue'
import Referanslar from '../views/Referans.vue'
import Iletisim from '../views/Iletisim.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/hizmetler',
    name: 'Hizmetler',
    component: Hizmetler
  },
  {
    path: '/referanslar',
    name: 'Referanslar',
    component: Referanslar
  },
  {
    path: '/iletisim',
    name: 'Iletisim',
    component: Iletisim
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
