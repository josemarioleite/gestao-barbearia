import { RouteRecordRaw } from 'vue-router'

// Páginas
import Home from 'src/paginas/Home.vue'
import Autenticacao from 'src/paginas/autenticacao/Autenticacao.vue'
import Produtos from 'src/paginas/produto/Produto.vue'
import NovoProduto from 'src/paginas/produto/NovoProduto.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/auth',
    component: Autenticacao,
    name: 'autenticacao'
  },
  {
    path: '/produtos',
    component: Produtos,
    name: 'produtos',
    children: [
      {
        path: '/novo-produto',
        name: 'novoProduto',
        component: NovoProduto
      }
    ]
  }
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue'),
  // },
]

export default routes
