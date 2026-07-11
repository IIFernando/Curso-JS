const data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo';
        console.log(diaSemana);
        break;
    case 1:
        diaSemana = 'Segunda';
        console.log(diaSemana);
        break;
    case 2:
        diaSemana = 'Terça';
        console.log(diaSemana);
        break;
    case 3:
        diaSemana = 'Quarta';
        console.log(diaSemana);
        break;
    case 4:
        diaSemana = 'Quinta';
        console.log(diaSemana);
        break;
    case 5:
        diaSemana = 'Sexta';
        console.log(diaSemana);
        break;
    case 6:
        diaSemana = 'Sabado';
        console.log(diaSemana);
        break;
}