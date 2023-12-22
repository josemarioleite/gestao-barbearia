<template lang="pug">
q-select.idioma(
  borderless
  v-model="$i18n.locale"
  option-label="nome"
  option-value="valor"
  @update:model-value="mudarIdiomaLocal"
  :options="idiomas"
  :item-aligned="false"
)
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

interface Idioma {
  nome: string
  valor: string
}

export default defineComponent({
  name: 'Idioma',
  data: () => ({
    idiomaSelecionado: useI18n().locale.value
  }),
  computed: {
    idiomas () {
      const idiomas: Array<Idioma> = [
        {
          nome: 'português (Brasil)',
          valor: 'pt-BR'
        },
        {
          nome: 'inglês (USA)',
          valor: 'en-US'
        }
      ]

      return idiomas
    }
  },
  methods: {
    mudarIdiomaLocal (idioma: Idioma) {
      this.$i18n.locale = idioma.valor
      this.verificarIdiomaEscolhidoPeloUsuario(idioma)
    },
    verificarIdiomaEscolhidoPeloUsuario (idioma: Idioma) {
      const nomeDoStorageParaIdioma = 'idioma-local-gestao-barberia'
      const valorDoStorage = localStorage.getItem(nomeDoStorageParaIdioma) || null

      if (valorDoStorage) {
        localStorage.removeItem(nomeDoStorageParaIdioma)
      }

      localStorage.setItem(nomeDoStorageParaIdioma, idioma.valor)
    }
  }
})
</script>

<style lang="scss">
@import url('./idioma.scss');

.q-field__native span {
  color: #fff !important;
}
</style>
