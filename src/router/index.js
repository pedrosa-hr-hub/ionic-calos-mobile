import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/voto'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/voto'
      },
      {
        path: 'login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: 'voto',
        component: () => import('@/views/Voto.vue')
      },
      {
        path: 'dados',
        component: () => import('@/views/Dados.vue')
      },
      {
        path: 'sintetico',
        component: () => import('@/views/DadosSinteticos.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
