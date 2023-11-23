import { boot } from 'quasar/wrappers'

import Idioma from 'src/componentes/idioma/Idioma.vue'
import Tabela from 'src/componentes/gerais/tabela/Tabela.vue'
import Input from 'src/componentes/gerais/input/Input.vue'

export default boot(async ({ app }) => {
  app.component('idioma', Idioma)
  app.component('v-tabela', Tabela)
  app.component('v-texto', Input)
})
