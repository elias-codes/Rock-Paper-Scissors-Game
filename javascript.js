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
    let scoreHuman = 0;
    let scorePC = 0;
    for (let i = 0; i < 5; i++) {//repeats the rounds 5 times
        let computerSelection = computerPlay(); //calls computer choice
        const playerSelection = "rock";//asks for user choice
        let results = playRound(playerSelection, computerSelection); //Sends each selection for comparison and receives a flag with the results
        
        switch (results) {//This checks the received result, displays a message and adds a score
            case 'draw':
                console.log("Draw!");
                console.log(`You both chose ${playerSelection}`);
                break;
            case 'win':
                console.log("You win!");
                scoreHuman++;
                console.log(`${playerSelection} beats ${computerSelection}`);
                break;
            case 'lose':
                console.log("You lose!");
                scorePC++;
                console.log(`${computerSelection} beats ${playerSelection}`);
                break;
        }
        
        console.log(results);
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(scoreHuman);
        console.log(scorePC);
    }
    
    console.log(score(scoreHuman, scorePC));//prints final result
}

function score (scoreHuman, scorePC) { //Compares each score and gives a final result
    let finalResults;
    if (scoreHuman == scorePC) {//Results for a draw
        finalResults = "It's a draw!";
    }
    else if (scoreHuman > scorePC) {//Results when user wins
        finalResults = "You won!";

    }
    else {
        finalResults = "You lost";
    }
    return finalResults;
}

 game();

