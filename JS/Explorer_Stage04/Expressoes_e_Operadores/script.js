let number;
// Isso é uma expressão, já que estamos declarando uma váriavel, nesse caso com o valor de undefined.

// Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função auto-executável, é um dos poucos casos onde faz falta, e é em um cenário como o seguinte:

let number = 1(function () {
  console.log("alo");
})();

// Caso você tente executar esse código, ele vai tentar atribuir essa função ao valor 1, onde o Javascript vai tentar executar o 1, passar uma função como argumento,
// e o 1 vai receber uma outra função. Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta.

// Veremos também sobre operadores, nesse exemplo temos o binário, unário e ternário.

/* unário */
let number = 1;

console.log(++number);

/* binário */
let number = 1;

console.log(number + 1);

/* ternário */
console.log(true ? "alo" : "nada");


