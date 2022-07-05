function computerPlay() { //This function makes the selection for the computer
    let random = Math.floor(Math.random()*3 + 1); //Creates a random numer from 1 to 3
    console.log(random);
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
    console.log(computerSelection);
    return computerSelection;    
}

function playRound (playerSelection, computerSelection) {//This function compares the selection of computer and human
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();//converts text to lower case to disregard uppercase
    
    if (playerSelection == computerSelection) {//Checks for draws
        let result = "Draw!"
        return result;
    }
    else {//If there isn't a draw then compare the selection
        switch (playerSelection) {//Depending on what the human chooses compare to computer
            case 'rock':
                if (computerSelection == "paper")
                {
                    let result = "You lose! Paper beats Rock";
                    return result;
                }
                else {
                    let result = "You win! Rock beats Scissor";
                    return result;
                }
            case 'paper':
                if (computerSelection == "scissors")
                {
                    let result = "You lose! Scissors beats Paper";
                    return result;
                }
                else {
                    let result = "You win! Paper beats Rock";
                    return result;
                }
            case 'scissors':
                if (computerSelection == "rock")
                {
                    let result = "You lose! Rock beats scissors";
                    return result;
                }
                else {
                    let result = "You win! Scissors beats Paper";
                    return result;
                }
        }
    }
    console.log(playerSelection);
    console.log(computerSelection);
}

function game() {//This is the main game function
    for (let i = 0; i < 5; i++) {//repeats the rounds 5 times
        let computerSelection = computerPlay();
        const playerSelection = "rock";
        console.log(playRound(playerSelection, computerSelection));
    }
}
 game();

