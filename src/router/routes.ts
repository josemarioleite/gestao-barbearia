import { RouteRecordRaw } from 'vue-router'

// Páginas
import Home from 'src/paginas/Home.vue'
import Autenticacao from 'src/paginas/autenticacao/Autenticacao.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/',
    component: Autenticacao,
    name: 'autenticacao'
  }
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue'),
  // },
]

export default routes
