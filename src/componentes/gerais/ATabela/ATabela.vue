<template lang="pug">
q-table.tabela(
  flat
  bordered
  virtual-scroll
  :title="Titulo"
  :rows="Linhas"
  :columns="Colunas"
  :separator="Separador"
  row-key="id"
)
  template(v-slot:top-right="props")
    q-btn(flat dense icon-right="more_vert")
      q-menu( fit anchor="bottom left" self="center end")
        q-list.tabela__menu-opcoes(style="width: 175px")
          q-toggle.q-mb-md.fonte-padrao-2(v-model="visaoCelula" color="red" label="Célula")
          q-toggle.q-mb-md.fonte-padrao-2(v-model="visaoHorizontal" color="green" label="Linha Horizontal")
          q-toggle.q-mb-md.fonte-padrao-2(v-model="visaoVertical" color="yellow" label="Linha Vertical")

  template(v-slot:header="props")
    q-tr(:props="props")
      q-th(
        v-for="coluna in props.cols"
        class="fonte-tabela tabela--cabecalho"
        :key="coluna.name"
        :props="props"
      ) {{ coluna.label }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  Titulo: string
  Separador?: string
  Colunas: object
  Linhas: Array<unknown>
}

withDefaults(defineProps<Props>(), {
  Titulo: 'Tabela',
  Separador: 'cell'
})

const visaoCelula = ref<boolean>(false)
const visaoHorizontal = ref<boolean>(false)
const visaoVertical = ref<boolean>(false)

const exibirValor = (valor: unknown) => {
  console.log(valor)
}
</script>

<style lang="scss" scoped>
.tabela {
  background: transparent;
  border: 1px solid #ccc;
  margin: 5px;
}

.tabela--cabecalho {
  font-size: .9rem;
  font-weight: bold;
}

.tabela__menu-opcoes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  padding-top: 10px;
}
</style>
