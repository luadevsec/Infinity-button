console.log("Starting");

var display = document.querySelector("#points");
var hiscore = document.querySelector("#hiscore");
var currentPoints = parseInt(display.innerHTML);
var currentPoints = 0
var currentHiscores = parseInt(hiscore.innerHTML);
var chance = 1
var nivel = 4

function incrementar() {
    display.innerHTML = currentPoints + 1;
    currentPoints = parseInt(display.innerHTML);
    console.log(display.innerHTML);
}
function checar() {
    if (currentPoints > currentHiscores) {
        currentHiscores = currentPoints;
        hiscore.innerHTML = currentHiscores;
    }

}

function random(x, y) {
    // Gera um número aleatório entre 0 (inclusive) e 1 (exclusive)
    var numeroAleatorio = Math.random();

    // Ajusta o número para o intervalo entre x e y (ambos inclusivos)
    var resultado = Math.floor(numeroAleatorio * (y - x + 1)) + x;

    return resultado;
}

function sortear() {
    rand = random(1, 100 / chance);
    console.log(rand);
    return rand > currentPoints;
}


function reset(){
    currentPoints = 0;
    display.innerHTML = "0";
}

function clicar(){
    if (sortear()){
        incrementar();
        checar();
    }
    else reset();

    
}

function melhorar(){
    if (currentPoints >= 5*nivel) {
        reset();
        nivel++
        chance -= 0.1
    }
}