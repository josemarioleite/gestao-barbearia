<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template lang="pug">
q-header.cabecalho(v-if="exibirCabecalho" bordered)
  template(v-if="false" v-for="(item, chave) in menuCabecalho" :key="chave")
    q-btn.cabecalho__botao.fonte-padrao(
      flat
      @click="testar"
      :label="item.titulo"
    )
      q-menu(
        transition-show="jump-down"
        transition-hide="jump-up"
      )
        template.cabecalho__submenu(
          v-for="(submenu, nova_chave) in item.itens"
          :key="nova_chave"
        )
          .cabecalho__submenu
            span.cabecalho__submenu--menu {{ submenu.titulo }}
  idioma
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { storeCabecalho } from './cabecalho.store'

const $store = storeCabecalho()

interface SubMenu {
  titulo: string
  visivel: boolean
  irPara?: string
}

interface Menu {
  titulo: string
  icone: string
  irPara?: string
  visivel: boolean
  itens: Array<SubMenu>
}

const exibirCabecalho = computed(() => {
  return $store.exibirCabecalho
})

const menuCabecalho = computed(() => {
  const menu: Array<Menu> = [
    {
      titulo: 'Atendimento',
      icone: 'home',
      visivel: true,
      irPara: '',
      itens: []
    },
    {
      titulo: 'Cadastro',
      icone: 'home',
      visivel: true,
      itens: [
        {
          titulo: 'profissional',
          visivel: true
        },
        {
          titulo: 'serviços',
          visivel: true
        }
      ]
    }
  ]

  return menu
})
</script>

<style>
@import url('./Cabecalho.scss');
</style>
