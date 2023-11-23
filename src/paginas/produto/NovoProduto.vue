<template lang="pug">
.novo-produto
  span Testando
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const $route = useRoute()

const contemIDNarota = computed(() => {
  return Boolean($route.params.produtoID)
})

onMounted(() => {
  console.log(contemIDNarota)
  console.log($route)
})
</script>

<style lang="scss" scoped>
.novo-produto {
}
</style>
