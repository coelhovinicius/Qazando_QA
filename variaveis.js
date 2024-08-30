// var - Variável alterável - string (texto)
var  nome = 'Vinicius'
nome = 'Juliane'
console.log(nome)

// let - Variável que aceita int e float - number
let numero = 50
numero = 60
console.log(numero)

// const - Variável não alterável
const cidade = 'Guarulhos'
console.log(cidade)

// Bool - verdadeiro ou falso
var maior_numero = false
console.log(maior_numero)

// Arrays - lista de dados
const paises = ['Brasil', 'Argentina', 'Alemanha']
console.log(paises)

// Objetos - Chave e Valor
let device = {
    nome: 'iPhone 14',
    preco: 6000,
    // Objeto dentro de objeto
    cores: {
        cor1: 'vermelho',
        cor2: 'azul',
        cor3: 'preto'
    }
}

// Função
const square = function(numero) {
    return numero * numero;
};

const resultado = square(4);
console.log(resultado)