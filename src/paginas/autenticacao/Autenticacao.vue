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
        Icone="person"
        v-model="$v.email.$model"
        :Erro="$v.email.$error"
        :MensagemErro="$t('Componentes.Login.Input.Obrigatorio.mensagem')"
        :Titulo="$t('Componentes.Login.Input.Email.texto')"
        :Placeholder="$t('Componentes.Login.Input.Email.placeholder')"
      )
      ATextoInput.autenticacao__insercao-de-dados--texto-input(
        Icone="password"
        TipoInput="password"
        v-model="$v.senha.$model"
        :Erro="$v.senha.$error"
        :MensagemErro="$t('Componentes.Login.Input.Obrigatorio.mensagem')"
        :Titulo="$t('Componentes.Login.Input.Senha.texto')"
        :Placeholder="$t('Componentes.Login.Input.Senha.placeholder')"
      )
      q-btn.autenticacao__botao-logar(
        flat
        @click="entrar"
        :label="$t('Componentes.Login.Botao.texto')"
      )
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import ATextoInput from './ATextoInput.vue'

const campos = reactive({
  email: '',
  senha: ''
})

const regras = {
  email: { required },
  senha: { required }
}

const $v = useVuelidate(regras, campos)

const entrar = async () => {
  $v.value.$validate()

  if (!$v.value.$error) {
    return console.log('LOGADO')
  }

  return console.log('PREENCHER')
}
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
  margin-bottom: 30px;
}

.autenticacao__botao-logar {
  background-color: $primary;
  color: #fff;
  border-radius: 15px;
  width: 20%;
}

@media only screen and (max-width: 499px) {
  .autenticacao__componentes {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 70%;
  }

  .autenticacao__componentes__mensagem {
    width: 100%;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .autenticacao__insercao-de-dados--texto-input {
    width: 90%;
  }

  .autenticacao--login {
    margin-top: 30px;
  }

  .autenticacao__botao-logar {
    margin-bottom: 25px;
  }

  .autenticacao__componentes__subtitulo {
    font-size: 1.1rem;
  }

  .autenticacao__botao-logar {
    width: 150px;
  }
}
</style>
