<template lang="pug">
q-input.texto-input__input(
  borderless
  label-color="primary"
  :error="Erro"
  :error-message="MensagemErro"
  :type="TipoInput"
  :placeholder="Placeholder"
  :label="Titulo"
)
  template(v-slot:prepend)
    .texto-input__icone
      q-icon(
        color="white"
        size="25px"
        :name="Icone"
      )
</template>

<script lang="ts" setup>
interface Props {
  Titulo: string
  Placeholder: string
  Icone: string
  TipoInput?: string
  MensagemErro: string
  Erro?: boolean
}

withDefaults(defineProps<Props>(), {
  VModel: '',
  TipoInput: 'text',
  Erro: false
})
</script>

<style lang="scss" scoped>
.texto-input__icone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: $primary;
  height: 50px;
  width: 60px;
}

.texto-input__input {
  background: #fff;
  height: 50px;
  padding: 0 10px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #e0dddd;
  font-size: 15px;
}
</style>
