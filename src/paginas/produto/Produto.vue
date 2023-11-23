<template lang="pug">
.produto
  v-tabela(
    Titulo="Teste"
    :Colunas="colunas"
    :Linhas="linhas"
  )
</template>

<script lang="ts" setup>
const colunas = [
  { name: 'id', label: 'ID', field: 'id' },
  { name: 'valor', label: 'Valor', field: 'valor' }
]

const linhas = [
  {id: '01', valor: 12345},
  {id: '02', valor: 23456}
]
</script>

<style lang="scss" scoped>
span {
  font-size: 2rem;
  color: #000;
}
</style>
