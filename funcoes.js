// Funções / Métodos:
// Precisam ser chamadas
// Pode ou não receber parâmetros
// Pode ou não retornar dados

function gerarNome() {
    const nome = 'Vinicius'
    const sobrenome = 'Coelho'
    const idade = 43

    console.log('Nome:', nome, sobrenome)
    console.log('Idade:', idade, 'anos')
}

function gerarNomeParametros(nome, sobrenome, idade) {
    console.log('Nome:', nome, sobrenome)
    console.log('Idade:', idade, 'anos')
}

// Chamando as funções
gerarNome()
console.log('------------------------------------')
gerarNomeParametros('Juliane', 'Midori', 36) // Chamando a função com parâmetros