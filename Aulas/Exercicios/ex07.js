const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    
    switch (data.getDay(diaSemana)) {
        case 0:
            diaSemanaTexto = 'Domingo';
            console.log(diaSemana);
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            console.log(diaSemana);
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            console.log(diaSemana);
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            console.log(diaSemana);
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            console.log(diaSemana);
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            console.log(diaSemana);
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            console.log(diaSemana);
            return diaSemanaTexto;
    }
}

h1.innerHTML = `Hoje é ${getDiaSemanaTexto(data)}, ${data.setUTCMonth()}`;