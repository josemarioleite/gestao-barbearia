<template lang="pug">
.texto-input
  .texto-input__icone
    q-icon(
      color="white"
      size="25px"
      :name="Icone"
    )
  q-input.texto-input__input(
    borderless
    label-color="primary"
    :type="TipoInput"
    :placeholder="Placeholder"
    :model-value="VModel"
    :label="Titulo"
  )
</template>

<script lang="ts" setup>
interface Props {
  VModel: string | null
  Titulo: string
  Placeholder: string
  Icone: string
  TipoInput?: string
}

withDefaults(defineProps<Props>(), {
  VModel: null,
  TipoInput: 'text'
})
</script>

<style lang="scss" scoped>
.texto-input {
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #e0dddd;
  display: flex;
  flex-direction: row;
}

.texto-input__icone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: $primary;
  height: 100%;
  width: 65px;
}

.texto-input__input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 5px;
  padding-bottom: 5px;
}
</style>
