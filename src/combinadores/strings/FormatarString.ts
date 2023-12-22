export function iniciais (nome: string) {
  const primeiraLetra: string = nome.charAt(0)
  const indiceEspaco: number = nome.indexOf(' ')
  const primeiraLetraSobrenome: string = nome.charAt(indiceEspaco + 1)

  return (primeiraLetra + primeiraLetraSobrenome).toUpperCase()
}
