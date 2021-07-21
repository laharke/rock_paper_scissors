let humanScore = 0;
let computerScore = 0;
const playerScoreNode = document.querySelector('#playerScore');
const computerScoreNode = document.querySelector('#computerScore');
const piedrabutton = document.querySelector('#piedra')

const mensajeNode = document.querySelector('#mensaje')
const winnerNode = document.querySelector('#winner')
//meto los botones en una array
const buttons = document.querySelectorAll('.btn');



//loopeo por cada uno de los botones agragandole un listener para el click y que ahi se juege el juego sin encesidad de una loop
buttons.forEach((button)=>{button.addEventListener('click',()=>{

    let playerChoice = button.id;
    let computerChoice = computerPlay();
    let mensaje = playRound(playerChoice, computerChoice);
    //updatear los scores cuando vayan cambiando
    playerScoreNode.textContent = `Puntaje Jugador: ${humanScore}`;
    computerScoreNode.textContent = `Puntaje Computadora: ${computerScore}`;
    //Dar la informacion de que eligio cada uno y quien gano
    mensajeNode.textContent = mensaje;
    if (humanScore == 5 || computerScore == 5) {
        //terminar el juego
        buttons.forEach(button => button.disabled = true)
        if (humanScore == 5){
            winnerNode.textContent = 'GANASTE! F5 para jugar de nuevo'
        }
        else if(computerScore == 5){}
            winnerNode.textContent = 'PERDISTE! F5 para jugar de nuevo'
    }
    })
})




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

function playRound(playerSelection, computerSelection,) {
    //funcion que simula una ronda de piedra, papel o tijera y devuelve al ganador.
    //si gana el usuario
    if ((playerSelection == 'piedra' && computerSelection == 'tijera') ||
    (playerSelection == 'tijera' && computerSelection == 'papel') ||
    (playerSelection == 'papel' && computerSelection == 'piedra')) {
        humanScore = humanScore + 1;
        return `Ganaste! ${playerSelection} le gana a ${computerSelection}`
    }
    //si empatan
    else if (playerSelection == computerSelection)
    {
        return `Empate! Ambos eligieron ${playerSelection} y ${computerSelection}`
    }
    //si gana la maquina
    else {
        computerScore = computerScore + 1;
        return `Perdiste! ${playerSelection} pierde con ${computerSelection}`
    }
}
