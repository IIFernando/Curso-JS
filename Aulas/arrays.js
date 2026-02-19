//Indice do array:   0          1         2
const alunos = ['Fernando', 'Lavinia', 'Bruna']; //Uma lista simples.
console.log(typeof(alunos)); //Arrays sempre retorna o tipo do objeto
console.log(alunos instanceof Array); //Avalia se a instancia do objeto é um array.

// console.log(alunos[0]); //Acessando apenas uma posição do array.

alunos[0] = 'Matheus'; //ALterando um valor em uma das posições da lista.

alunos[alunos.length] = 'Maria'; //Adicionando mais um elemento no arrya sempre no final
alunos.push('Jassiara'); // Melhor forma de por mais um elemento no final do array.
alunos.unshift('Gabriel'); //Melhor forma de por mais um elemento no inicio do array.

alunos.pop; // Remove o elemento no final do array.
alunos.shift; //Remove o elemento no inicio do array.


console.log(alunos);
// console.log(alunos.length); //Vendo o tamanho do array.