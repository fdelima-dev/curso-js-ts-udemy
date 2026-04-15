const nome = "Felipe";
const sobrenome = "Lima";
const idade = 33;
const peso = 120;
const  altura = 1.75;
let imc = peso / (altura * altura); //peso / (altura * altura)
let anoNascimento = 2026 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} quilos, tem ${altura}(m) de altura e seu IMC é ${imc.toFixed(2)}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
