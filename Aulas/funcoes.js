// function saudacao(nome) {
//     return `Bom dia ${nome}`;
// }

// const variavel = saudacao('Fernando'); //Gravando o retorno da função em uma variavel.
// console.log(variavel)

// function soma(x, y){
//  const result = x + y;
//  return result
// }

// console.log(soma(4, 2))

//Forma de criar uma função anônima
// const raiz = function(number) {
//     return Math.sqrt(number)
// }

/*Forma de criar uma função anônima mais moderna chamada de arrow function. 
Se tiver apenas uma linha na execução tambem é possivel deixar em apenas uma linha.*/
// const raiz = number =>  Math.sqrt(number);
// console.log(raiz(9));

// function parameters(bread, name, price) {
//     //Escopo da nossa funcao.

//     console.log(`Torrada feita com ${bread}, para ${name} e o valor e de ${price}`)
// }

// parameters("Pao de forma", "Fernando", 1.80)

function soma(numA, numB) {
    let somatoria = numA + numB;
    return somatoria;
}

let sun = soma(1, 5);

console.log(sun)