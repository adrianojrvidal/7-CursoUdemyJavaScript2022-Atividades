/* QUESTÃO 01

Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
multiplicação e divisão desses valores.

*/

// Estrutura de uma Função
// function nomeQualquer(parametros) {comandos}


function valores (x, y) {
    console.log ("A soma de X e Y é igual a: " + (x + y))
    console.log ("A subtração de X e Y é igual a: " + (x - y))
    console.log ("A multiplicação de X e Y é igual a: " + (x * y))
    console.log ("A divisão de X e Y é igual a: " + (x / y))
}

valores(5,2)