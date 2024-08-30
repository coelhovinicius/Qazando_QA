/*Exercício 3: Funções
- Criar uma função que recebe dois números e retorna a soma desses números
- Os números devem ser enviados por parâmetros

Exemplo de saída:
Número 1: 10
Número 2: 20
Soma: 30*/

function somaDoisNumeros(numero1, numero2) {
    const resultado = numero1 + numero2
    console.log('Número 1:', numero1)
    console.log('Número 2:', numero2)
    return resultado
}

console.log('Soma:', somaDoisNumeros(10, 20))