const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Araujo',
    idade: 36,

    //Criação de um método para o objeto.
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    }
};

pessoa.fala()

//Função chamada de factory para a criação de algo
function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade
    }
};

const pessoa1 = criaPessoa('Lavinia', 'Araujo', 2);
console.log(pessoa1);