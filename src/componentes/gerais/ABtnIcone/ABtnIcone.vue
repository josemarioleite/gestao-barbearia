<template lang="pug">
q-btn.botao(
  flat
  dense
  :color="Cor"
  :icon="Icone"
)
</template>

<script lang="ts" setup>
interface Props {
  Cor: string,
  Icone: string
}

withDefaults(defineProps<Props>(), {
  Cor: 'negative',
  Icone: 'person'
})
</script>

<style lang="scss" scoped>
.botao {
}
</style>
