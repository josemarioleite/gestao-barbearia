import { boot } from 'quasar/wrappers'

import Idioma from 'src/componentes/idioma/Idioma.vue'
import { AInput, ATabela, ASelect, ABtnIcone } from 'src/componentes/gerais'

export default boot(async ({ app }) => {
  app.component('idioma', Idioma)
  app.component('v-tabela', ATabela)
  app.component('v-texto', AInput)
  app.component('v-select', ASelect)
  app.component('v-btn-icone', ABtnIcone)
})
