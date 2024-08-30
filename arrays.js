// Lista de dados
const paises = ['Brasil', 'Argentina', 'Alemanha']
console.log(paises)
console.log(paises.length) // Tamanho do array

// Acessando cada posição do array
console.log(paises[0])
console.log(paises[1])
console.log(paises[2])

// Concatenação de Strings - sinal de "+"
console.log('Acessando o país: ' + paises[0])
console.log('Tamanho da Array: ' + paises.length)

// Manipulação de Arrays
paises.unshift('França') // Adiciona elemento ao começo de um array
console.log(paises)

paises.push('Uruguai') // Adiciona elemento ao final de um array
console.log(paises)

paises.shift() // Remove o primeiro elemento de um array
console.log(paises)

paises.pop() // Remove o último elemento de um array
console.log(paises)
