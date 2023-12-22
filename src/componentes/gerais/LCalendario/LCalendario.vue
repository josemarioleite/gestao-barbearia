<template>
<VueCal
  class="LCalendario fonte-padrao"
  :events="eventos"
  hide-title-bar
  hide-view-selector
  :locale="idiomaEscolhido"
  :min-event-height="50"
  :min-event-width="50"
  :overlaps-per-time-step="false"
  resize-x
  selected-date="2023-12-18"
  :time-from="7 * 60"
  :time-step="15"
  :time-to="23 * 60"
  watch-real-time
>
  <template #event="{ event }">
    <OEvento
      :cliente="event.cliente"
      :data-final="new Date(event.end)"
      :data-inicial="new Date(event.start)"
      :profissional="event.profissional"
    />
  </template>
</VueCal>
</template>

<script lang="ts" setup>
import 'vue-cal/dist/vuecal.css'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import OEvento from './OEvento.vue'
import VueCal from 'vue-cal'

const idiomaEscolhido = computed(() => {
  let local = useI18n().locale.value.toLocaleLowerCase()

  if (local === 'en-us') {
    local = 'en'
  }

  return local
})

const eventos = [
  {
    nome: 'Novo arquivamento',
    cliente: 'Fulano da Silva',
    profissional: 'Serviceiro 1',
    start: '2023-12-20 09:30',
    end: '2023-12-20 10:00'
  },
  {
    nome: 'Novo horário',
    cliente: 'Testando nome',
    profissional: 'Barbeiro 3',
    start: '2023-12-20 09:30',
    end: '2023-12-20 10:00'
  },
  {
    nome: 'Novo horário',
    cliente: 'Testando nome',
    profissional: 'Barbeiro 3',
    start: '2023-12-22 12:00',
    end: '2023-12-22 13:00'
  },
  {
    nome: 'Novo horário',
    cliente: 'Testando nome',
    profissional: 'Barbeiro 3',
    start: '2023-12-18 07:30',
    end: '2023-12-18 08:30'
  },
  {
    nome: 'Novo horário',
    cliente: 'Testando nome grande para teste',
    profissional: 'Barbeiro 3',
    start: '2023-12-19 10:30',
    end: '2023-12-19 11:30'
  }
]
</script>

<style lang="scss" scoped>
.LCalendario {
  width: 100%;
}

:deep(.vuecal__header) {
  background-color: $azul-claro-padrao;
}

:deep(.vuecal__flex .weekday-label) {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
}

:deep(.vuecal__time-column .vuecal__time-cell-label) {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: .85rem;
  font-weight: 600;
}

:deep(.vuecal__event) {
  border-radius: 5px;
  height: auto !important;
  min-width: 150px;
}

:global(.vuecal__flex .vuecal__weekdays-headings) {
  padding-right: 0px !important;
}
</style>
