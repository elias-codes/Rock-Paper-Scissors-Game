function computerPlay() { //This function makes the selection for the computer
    let random = Math.floor(Math.random()*3 + 1); //Creates a random numer from 1 to 3
    //console.log(random);
    let computerSelection; //This saves the computer turn
    switch (random) { //This switch converts from number to text
        case 1: 
            computerSelection = "ROCK";
            break;
        case 2:
            computerSelection = "PAPER";
            break;
        case 3:
            computerSelection =  "SCISSORS";
            break;
    }
    //console.log(computerSelection);
    return computerSelection;    
}

function playRound (playerSelection, computerSelection) {//This function compares the selection of computer and human
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();//converts text to lower case to disregard uppercase
    
    if (playerSelection == computerSelection) {//Checks for draws
        let result = "Draw"
        return result;
    }
    
    console.log(playerSelection);
    console.log(computerSelection);
}

let computerSelection = computerPlay();
const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));