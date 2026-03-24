//Não podemos criar constantes com palavras reservada
//Constantes precisam ter nomes significativos
//Não pode começar constante com número
//Não pode conter espaços ou traços
//utilizamos camelCase
//Não podemos modificar o valor de uma constante
//NÃO UTILIZE VAR, UTILIZE CONST
//Case Sensitive - letra maiúscula e letra minúscula faz diferença

const nome = 'João'
console.log(nome)

const primeiroValor = 5;
const segundoValor = 10;
const resultado = primeiroValor * segundoValor;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);

console.log(typeof(primeiroValor))