// Curso Web Moderno - Exercícios Javascript


/* QUESTÃO 04
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/


// Minha resposta

function divisao1 (dividendo, divisor) {
    resultadoDivisao = dividendo / divisor
    resto = dividendo % divisor
    return console.log(resultadoDivisao, resto)
}

divisao1 (4, 2)
divisao1 (8, 3)

/* Resultado: 
2 0
2.6666666666666665 2
*/




// RESPOSTA DO PROFESSOR

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor)); // Math.floor retorna o valor inteiro mais prówximo
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)

/* Resultado: 
Resultado: 2
Resto: 3
*/
