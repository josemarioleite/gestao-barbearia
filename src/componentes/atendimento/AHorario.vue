<template lang="pug">
.AHorario
  .AHorario__data
    span.AHorario--titulo Data do atendimento:
    span.AHorario--conteudo {{ data }}
  .AHorario__horario
    span.AHorario--titulo Horário marcado:
    span.AHorario--conteudo {{ horario }}
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { date } from 'quasar'

const dataDeAgora = computed(() => {
  return new Date()
})
const horario = date.formatDate(dataDeAgora.value, 'HH:mm')
const data = date.formatDate(dataDeAgora.value, 'DD-MM-YYYY')

</script>

<style lang="scss" scoped>
.AHorario {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: #fff;

  &__data, &__horario {
    display: flex;
    flex-direction: column;
  }

  &--titulo {
    font-size: .8rem;
    color: #fff;
    margin-left: 10px;
  }

  &--conteudo {
    font-size: 1.2rem;
    text-align: center;
    color: #fff;
  }
}

@media only screen and (max-width: 499px) {
  .AHorario {
    text-align: center;
    padding: 10px;
  }

  .AHorario__horario {
    margin-top: 10px;
  }

  .AHorario--titulo {
    margin-left: 0;
    font-size: .8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .AHorario--conteudo {
    font-size: .9rem;
  }
}
</style>
