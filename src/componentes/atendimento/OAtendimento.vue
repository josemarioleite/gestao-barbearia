<template lang="pug">
.OAtendimento.column
  .OAtendimento_inicio
    AHorario
  .OAtendimento_meio
    LInformacoes
  .OAtendimento_fim.fonte-padrao-2
    AStatus
</template>

<script lang="ts" setup>
import AStatus from './AStatus.vue'
import AHorario from './AHorario.vue'
import LInformacoes from './LInformacoes.vue'
</script>

<style lang="scss" scoped>
.OAtendimento {
  height: 100px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 7px 5px -1px rgba(0,0,0,0.58);
  -moz-box-shadow: 0px 7px 5px -1px rgba(0,0,0,0.58);
  -webkit-box-shadow: 0px 7px 5px -1px rgba(0,0,0,0.58);
}

.OAtendimento_inicio {
  background: #d85959;
  height: 100%;
  width: 15%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.OAtendimento_meio {
  background: #3e70dd;
  height: 100%;
  width: 75%;
}

.OAtendimento_fim {
  height: 100%;
  width: 10%;
  background: #5ad88a;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

@media only screen and (max-width: 499px) {
  .OAtendimento_inicio, .OAtendimento_meio, .OAtendimento_fim {
    width: 33.3%
  }
}
</style>
