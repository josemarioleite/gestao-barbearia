<template lang="pug">
.Atendimento
  .Atendimento__cabecalho
    q-avatar.Atendimento__cabecalho--avatar(size="xl" color="primary" text-color="white")
      span {{ nomeUsuario }}
    span.Atendimento__cabecalho--usuario.fonte-padrao-2 Mário Leite
  .Atendimento__area-de-visualizacao
    LCalendario
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { iniciais } from 'src/utlizaveis/FormatarString'
import { LCalendario } from 'src/componentes/gerais'

const status = ref<string>('Em andamento')

const nomeUsuario = computed(() => {
  const nome = 'Mário Leite'
  return iniciais(nome)
})

const abrirModal = () => {
  console.log('pronto')
}
</script>

<style lang="scss" scoped>
.Atendimento {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e3edf8;

  &__cabecalho {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 35px;
    height: 100px;
    width: 95%;
    background-color: #FFFFFF;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    &--avatar {
      margin-left: 20px;
    }

    &--usuario {
      font-size: 1.8rem;
      margin-left: 15px;
    }
  }

  &__area-de-visualizacao {
    width: 95%;
    background-color: #FFFFFF;
    border-radius: 10px;
  }
}

@media only screen and (max-width: 499px) {
  .Atendimento {
    &__cabecalho {
      justify-content: center;
    }
  }
}
</style>
