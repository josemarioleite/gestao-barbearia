import { boot } from 'quasar/wrappers'

import Idioma from 'src/componentes/idioma/Idioma.vue'
import { AInput, ATabela } from 'src/componentes/gerais'

export default boot(async ({ app }) => {
  app.component('idioma', Idioma)
  app.component('v-tabela', ATabela)
  app.component('v-texto', AInput)
})
