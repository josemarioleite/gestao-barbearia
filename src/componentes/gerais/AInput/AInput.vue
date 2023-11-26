<template lang="pug">
q-input(
  outlined
  square
  standout
  :label="Titulo"
  :mask="Mascara"
)
</template>

<script lang="ts" setup>
interface Props {
  Titulo: string
  Placeholder?: string
  Mascara?: string
}

withDefaults(defineProps<Props>(), {
  Titulo: ''
})
</script>

<style lang="scss" scoped>
</style>
