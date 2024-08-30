/*Exercício 1: Estrutura de Repetição:
Fazer um array com cinco nomes e exibir um por um, conforme o formato abaixo:
Execução: 1
Nome: Nome1
--------------------------
Execução: 2
Nome: Nome2
--------------------------
ETC..*/

const nomes = ['Juliane', 'Vinicius', 'Frida', 'Nori', 'Mochi']

console.log('Estrutura FOR:')
console.log()
for (let indice = 0; indice < nomes.length; indice++){
    console.log('Execução:', indice + 1)
    console.log('Nome: ' + nomes[indice])
    console.log('--------------------------------')
}

console.log()
console.log()

console.log('Estrutura FOREACH:')
console.log()
nomes.forEach((nome, indice) => {
    console.log('Execução:', indice + 1)
    console.log('Nome: ' + nome)
    console.log('--------------------------------')
});