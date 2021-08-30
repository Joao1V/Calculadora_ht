function insert(num) {
    document.querySelector('.visor').value = document.querySelector('.visor').value + num;

}

function clean() {
    document.querySelector('.visor').value = "";
}

function calcular() {
    var resultado = 0;
    resultado = document.querySelector('.visor').value;
    document.querySelector('.visor').value = '';
    document.querySelector('.visor').value = eval(resultado);

}