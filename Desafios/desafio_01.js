/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/

let nome = "Fernando";
let exp = 3500;

switch (true) {
    case (exp <= 1000):
        console.log(`O Herói de nome ${nome} está no nível Ferro.`);
        break;

    case (exp >= 1001 && exp <= 2000):
        console.log(`O Herói de nome ${nome} está no nível Bronze.`);
        break;
    case (exp >= 2001 && exp <= 5000):
        console.log(`O Herói de nome ${nome} está no nível Prata.`);
        break;
    case (exp >= 5001 && exp <= 7000):
        console.log(`O Herói de nome ${nome} está no nível Ouro.`);
        break;
    case (exp >= 7001 && exp <= 8000):
        console.log(`O Herói de nome ${nome} está no nível Platina.`);
        break;
    case (exp >= 8001 && exp <= 9000):
        console.log(`O Herói de nome ${nome} está no nível Ascendente.`);
        break;
    case (exp >= 9001 && exp <= 10000):
        console.log(`O Herói de nome ${nome} está no nível Imortal.`);
        break;
    case (exp >= 10001):
        console.log(`O Herói de nome ${nome} está no nível Radiante.`);
        break;
}