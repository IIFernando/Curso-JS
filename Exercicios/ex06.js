//IIFE
function formulario() {
    const form = document.querySelector('.form'); //Forma de selecionar objetos
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function(evento) {
    //     evento.preventDefault();
    //     alert('Enviado')
    // };

    form.addEventListener('submit', recebeEventoForm); //Metodo

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
};

formulario();