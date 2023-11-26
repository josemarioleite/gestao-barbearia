import { defineStore } from 'pinia'

export const storeCabecalho = defineStore('cabecalho', {
  state: () => ({
    exibirCabecalho: true
  })
})
