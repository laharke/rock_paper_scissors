function computerPlay() {
    //funcion para simular una eleccion de la computadora, deuvlvo todo en minuscula 
    let number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (number === 1) {
        return "piedra";
    }
    else if (number === 2) {
        return "papel";
    }
    else {
        return "tijera";
    }
}

function playerSelection() {
    //funcion para obtener input del jugador, probablmetne sea borrada por unos botones en el html y de ahi consigo la jugada, devuelve todo en minsucula
    playerSelection = prompt("Piedra, papel o tijera");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    //funcion que simula una ronda de piedra, papel o tijera y devuelve al ganador.
    //si gana el usuario
    if ((playerSelection == 'piedra' && computerSelection == 'tijera') ||
    (playerSelection == 'tijera' && computerSelection == 'papel') ||
    (playerSelection == 'papel' && computerSelection == 'piedra')) {
        return `Ganaste! ${playerSelection} le gana a ${computerSelection}`
    }
    //si empatan
    else if (playerSelection == computerSelection)
    {
        return `Empate! Ambos eligieron ${playerSelection} y ${computerSelection}`
    }
    //si gana la maquina
    else {
        return `Perdiste! ${playerSelection} pierde con ${computerSelection}`
    }
}

let player = playerSelection();
let computer = computerPlay();
console.log(playRound(player, computer))