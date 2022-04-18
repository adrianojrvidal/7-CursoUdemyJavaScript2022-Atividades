// Curso Web Moderno - Exercícios Javascript


/* QUESTÃO 01
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

// Minha resposta

function operacao (a, b) {
    let soma = a + b
    let sub = a - b
    let mult = a * b
    let div = a / b
    
    console.log('O valor de A é ${a}.') 
    console.log('O valor de B é ${b}.') 
    console.log('A soma é igual a ${soma}.')
    console.log('A subtração é igual a ${sub}.')
    console.log('A multiplicação é igual a ${mult}.')
    console.log('A divisão é igual a ${div}.')
}

//operacao(4, 2)

/* Resultado: 
O valor de A é ${a}.
O valor de B é ${b}.
A soma é igual a ${soma}.
A subtração é igual a ${sub}.
A multiplicação é igual a ${mult}.
A divisão é igual a ${div}. */

function operacao2 (a, b) {
    console.log('O valor de A é ' + a + '.') 
    console.log('O valor de B é ' + b + '.') 
    console.log('A soma é igual a ' + (a+b) + '.')
    console.log('A subtração é igual a ' + (a-b) + '.')
    console.log('A multiplicação é igual a ' + (a*b) + '.')
    console.log('A divisão é igual a ' + (a/b) + '.')
}

operacao2 (4, 2)

/* Resultado 2
O valor de A é 4.
O valor de B é 2.
A soma é igual a 6.
A subtração é igual a 2.
A multiplicação é igual a 8.
A divisão é igual a 2. */


// RESPOSTA DO PROFESSOR

function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)

// Resultado: 3 -1 2 0.5