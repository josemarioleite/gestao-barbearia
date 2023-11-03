import { boot } from 'quasar/wrappers'

import Idioma from 'src/componentes/idioma/Idioma.vue'

export default boot(async ({ app }) => {
  app.component('idioma', Idioma)
})
