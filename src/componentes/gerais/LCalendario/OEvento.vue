<template lang="pug">
.OEvento
  .OEvento__horario
    //- span.OEvento__horario--inicial 09:30
    //- span.OEvento__horario--final 10:00
    span.OEvento__horario--inicial {{ horarioInicial }}
    span.OEvento__horario--final {{ horarioFinal }}
  .OEvento__dados
    q-avatar.OEvento--avatar(icon="person")
    .OEvento__dados--cliente-profissional
      span.OEvento--cliente {{ nomeDoCliente }}
      span.OEvento--profissional {{ nomeDoProfissional }}
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  cliente: string
  profissional: string
  dataInicial: Date
  dataFinal: Date
}

const props = defineProps<Props>()

const horarioInicial = `${('0' + props.dataInicial.getHours()).slice(-2)}: ${('0' + props.dataInicial.getMinutes()).slice(-2)}`
const horarioFinal = `${('0' + props.dataFinal.getHours()).slice(-2)}: ${('0' + props.dataFinal.getMinutes()).slice(-2)}`
const nomeDoCliente = computed(() => {
  let nome = props.cliente

  if (nome.length > 15) {
    nome = nome.substring(0, 15) + '...'
  }

  return nome
})
const nomeDoProfissional = computed(() => {
  let nome = props.profissional

  if (nome.length > 15) {
    nome = nome.substring(0, 15) + '...'
  }

  return nome
})
</script>

<style lang="scss" scoped>
.OEvento {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: #fff;
  background: $azul-claro-padrao;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px;

  &--avatar {
    background: $primary;
    font-size: 2rem;
  }

  &__horario {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    font-size: 1rem;
  }

  &__dados {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5px;
    width: 90%;

    &--cliente-profissional {
      margin-left: 5px;
      gap: 2px;
      display: flex;
      flex-direction: column;
      text-align: start;
    }
  }

  &--profissional, &--cliente {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
