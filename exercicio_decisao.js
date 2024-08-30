/*Exercício 2: Estrutura de decisão
- Percorrer uma lista de cidades;
- Conteúdo da lista: São Paulo, Rio de Janeiro, Florianópolis, Recife
- Para cada item, verificar se a cidade Florianópolis está presente na lista
- Colocar o número da Execução*/

const cidades = ['São Paulo', 'Rio de Janeiro', 'Florianópolis', 'Recife']

cidades.forEach((cidade, indice) => {
    console.log('Execução:', indice + 1)
    console.log('Cidade:', cidade)

    if (cidade == 'Florianópolis') {
        console.log('ENCONTRADO!!!')
    } else {
        console.log('Não encontrado')
    }

    console.log('---------------------------------')
})