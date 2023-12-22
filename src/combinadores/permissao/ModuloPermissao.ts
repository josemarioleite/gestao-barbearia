export type TipoDePermissao = 'criar' | 'editar' | 'deletar' | 'visualizar'

export class Permissao {
  operacao: TipoDePermissao
  unico: boolean

  constructor (Operacao: TipoDePermissao, Unico = false) {
    this.operacao = Operacao
    this.unico = Unico
  }
}

const PermiteCriar = new Permissao('criar')
const PermiteDeletar = new Permissao('deletar')
const PermiteEditar = new Permissao('editar')
const PermiteVisualizar = new Permissao('visualizar')

const PermiteCriarProprio = new Permissao('criar', true)
const PermiteDeletarProprio = new Permissao('deletar', true)
const PermiteEditarProprio = new Permissao('editar', true)
const PermiteVisualizarProprio = new Permissao('visualizar', true)

export type GrupoDePermissoes = {
  administrador: Array<Permissao>
  pessoal: Array<Permissao>
  visualizador: Array<Permissao>
}

const Atendimento: GrupoDePermissoes = {
  administrador: [PermiteCriar, PermiteDeletar, PermiteEditar, PermiteVisualizar],
  pessoal: [PermiteEditarProprio, PermiteDeletarProprio, PermiteCriarProprio, PermiteVisualizarProprio],
  visualizador: [PermiteVisualizar]
}

export const ModuloDePermissao = {
  Atendimento
}
