<template lang="pug">
q-select.ASelect(
  outlined
  dense
  standout
  borderless
  :options="['Aguardando', 'Em andamento', 'Cancelado', 'Finalizado']"
)
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.ASelect {
  width: 250px;
  font-size: .8rem;
  background: $primary;
  border-radius: 5px;
}
</style>
