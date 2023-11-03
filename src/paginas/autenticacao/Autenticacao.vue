<template lang="pug">
.autenticacao.fonte-padrao
  .autenticacao__componentes
    .autenticacao__componentes__mensagem
      span.autenticacao__componentes__boas-vindas {{ $t('Autenticacao.bemVindo') }}
      span.autenticacao__componentes__subtitulo {{ $t('Autenticacao.subtituloBoasVindas') }}
      q-icon.autenticacao__componentes__icone-inicio(name="start")
    .autenticacao__componentes__insercao-de-dados
      span.autenticacao--login LOGIN
      ATextoInput.autenticacao__insercao-de-dados--texto-input(
        VModel=""
        Icone="person"
        :Titulo="$t('Componentes.Input.Email.texto')"
        :Placeholder="$t('Componentes.Input.Email.placeholder')"
      )
      ATextoInput.autenticacao__insercao-de-dados--texto-input(
        VModel=""
        Icone="password"
        TipoInput="password"
        :Titulo="$t('Componentes.Input.Senha.texto')"
        :Placeholder="$t('Componentes.Input.Senha.placeholder')"
      )
</template>

<script lang="ts" setup>
import ATextoInput from './ATextoInput.vue'
</script>

<style lang="scss" scoped>
.autenticacao {
  height: 100vh;
  background: #e6e2e2;
}

.autenticacao__componentes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 80%;
  background: #fff;
  border: 1px solid #ccc;
  border-radius:  15px;
  display: flex;
}

.autenticacao__componentes__mensagem {
  background-color: $primary;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  color: #fff;
}

.autenticacao__componentes__boas-vindas {
  font-size: 1.5rem;
  font-weight: bold;
}

.autenticacao__componentes__subtitulo {
  margin-top: 15px;
  font-size: .9rem;
  text-align: center;
  width: 70%;
}

.autenticacao__componentes__icone-inicio {
  margin-top: 20px;
  font-size: 50px;
}

.autenticacao__componentes__insercao-de-dados {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: #f1eeee;
}

.autenticacao--login {
  color: $primary;
  width: 100%;
  margin-top: 85px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
}

.autenticacao__insercao-de-dados--texto-input {
  width: 60%;
  margin-bottom: 15px;
}

@media only screen and (max-width: 499px) {
  .autenticacao__componentes {
    width: 90%;
    height: 75%;
  }
}
</style>
