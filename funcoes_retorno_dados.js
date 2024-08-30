// Funções com retorno de dados

function gerarNomeParametros(nome, sobrenome) {
    return 'Nome: '+ nome + ' ' + sobrenome
}
console.log(gerarNomeParametros('Vinicius', 'Coelho'))

const nomeGerado = gerarNomeParametros('Juliane', 'Midori')
console.log(nomeGerado)