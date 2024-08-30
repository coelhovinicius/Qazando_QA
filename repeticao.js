// Repetição por array
const cidade = ['Guarulhos', 'São Paulo', 'Campinas', 'Alphaville']
// Percorre e imprime cada elemento da array, parando quando a array terminar
cidade.forEach((elemento, indice) => {
    console.log('Execução número ' + indice + ': ' + elemento)
    //console.log(elemento)
})
console.log("############################################")

// FOR normal
for (let indice = 0; indice < 10; indice++) {
    console.log(indice)   
}
console.log("############################################")

for (let indice = 0; indice < cidade.length; indice++) {
    console.log(cidade[indice])   
    console.log('Indice ' + indice + ': ' + cidade[indice])
    console.log('----------------------------------------')
}