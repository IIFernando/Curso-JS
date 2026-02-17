const nome = 'Fernando';
const sobrenome = 'Alves de Araujo';
const peso = 109;
const altura = 1.85;
const idade = 36;

let imc = peso / altura ** 2;

// print utilizando tamplete strings
console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos, tenho ${altura} de altura e ${peso}kg. Meu IMC é de ${imc}`)