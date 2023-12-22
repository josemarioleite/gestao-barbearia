<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template lang="pug">
q-header.cabecalho(v-if="exibirCabecalho" elevated reveal)
  template(v-if="true" v-for="(item, chave) in menuCabecalho" :key="chave")
    q-btn.cabecalho__botao.fonte-padrao(
      flat
      @click="irParaPagina(item.irPara)"
      :label="item.titulo"
    )
      q-menu(transition-show="jump-down" transition-hide="jump-up")
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
import { storeCabecalho } from './OCabecalho.store'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const $store = storeCabecalho()
const $router = useRouter()
const $t = useI18n().t

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

const exibirCabecalho = computed(() => $store.exibirCabecalho)
const tituloCabecalho = computed(() => $t('Componentes.Cabecalho.menu.titulo').split('_'))
const itensCadastro = computed(() => $t('Componentes.Cabecalho.menu.itensCadastro').split('_'))

const menuCabecalho = computed(() => {
  const menu: Array<Menu> = [
    {
      titulo: tituloCabecalho.value[0],
      icone: 'home',
      visivel: true,
      irPara: 'atendimento',
      itens: []
    },
    {
      titulo: tituloCabecalho.value[1],
      icone: 'home',
      visivel: true,
      itens: [
        {
          titulo: itensCadastro.value[0],
          visivel: true
        },
        {
          titulo: itensCadastro.value[1],
          visivel: true
        }
      ]
    }
  ]
  return menu
})

const irParaPagina = (pagina: string) => {
  return $router.push({ name: pagina })
}
</script>

<style>
@import url('./OCabecalho.scss');
</style>
