function computerPlay() { //This function makes the selection for the computer
    let random = Math.floor(Math.random()*3 + 1); //Creates a random numer from 1 to 3
    //console.log(random);
    let computerSelection; //This saves the computer turn
    switch (random) { //This switch converts from number to text
        case 1: 
            computerSelection = "Rock";
            break;
        case 2:
            computerSelection = "Paper";
            break;
        case 3:
            computerSelection =  "Scissors";
            break;
    }
    //console.log(computerSelection);
    return computerSelection;    
}

function playRound (playerSelection, computerSelection) {//This function compares the selection of computer and human
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();//converts text to lower case to disregard uppercase
    
    if (playerSelection == computerSelection) {//Checks for draws
        let result = "draw"
        return result;
    }
    else {//If there isn't a draw then compare the selection
        switch (playerSelection) {//Depending on what the human chooses compare to computer
            case 'rock':
                if (computerSelection == "paper")
                {
                    let result = "lose";
                    return result;
                }
                else {
                    let result = "win";
                    return result;
                }
            case 'paper':
                if (computerSelection == "scissors")
                {
                    let result = "lose";
                    return result;
                }
                else {
                    let result = "win";
                    return result;
                }
            case 'scissors':
                if (computerSelection == "rock")
                {
                    let result = "lose";
                    return result;
                }
                else {
                    let result = "win";
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
        let results = playRound(playerSelection, computerSelection); //this receives the results
        let scoreHuman = 0;
        let scorePC = 0;
        switch (results) {//This checks the received result, displays a message and adds a score
            case 'draw':
                console.log("Draw!");
                break;
            case 'win':
                console.log("You win!");
                break;
            case 'lose':
                console.log("You lose!");
                break;
        }
        
        console.log(results);
        console.log(playerSelection);
        console.log(computerSelection);
    }
}
 game();

