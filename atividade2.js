// Curso Web Moderno - Exercícios Javascript


/* QUESTÃO 02
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/


// Minha resposta

/* function triangulo (a, b, c) {
    if (a == b == c) {
        console.log('Equilátero')
    } ifelse (a == b != c) || (a == c != b) || (b == c != a) {
        console.log('Isóceles')
    } else {
        console.log('Escaleno')
    }
}

triangulo (2, 2, 2)
*/

//Resultado: ERRO!

function triangulo2 (a, b, c) {
    if (a == b && a == c) {
        console.log('Equilátero')
    } else if (a == b && a != c) {
        console.log('Isóceles')
    } else if (a == c && a != b) {
        console.log('Isóceles')
    } else if (b == c && b != a) {
        console.log('Isóceles')
    } else {
        console.log('Escaleno')
    }
}

triangulo2 (2, 2, 2)
triangulo2 (2, 2, 4)
triangulo2 (2, 4, 2)
triangulo2 (2, 4, 4)
triangulo2 (2, 5, 6)

/* Resultado: 
Equilátero
Isóceles
Isóceles
Isóceles
Escaleno
*/




// RESPOSTA DO PROFESSOR

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));


/* Resultado: 
Equilátero
Isósceles
Escaleno
*/
