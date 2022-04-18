// Curso Web Moderno - Exercícios Javascript


/* QUESTÃO 03
Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/


// Minha resposta

function calcExponencial (base, expoente) {
    return base ** expoente
}

calcExponencial (2, 2)

// Resultado: Sem erro, porém sem resultado, pois se na função não tiver o comando console.log, deve chamar a função dentro de console.log

function calcExponencial2 (base, expoente) {
    return console.log(base ** expoente)
}

calcExponencial2 (2, 2)
calcExponencial2 (2, 4)

// Resultado: 4 16



// RESPOSTA DO PROFESSOR

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))

// Resultado: 8
