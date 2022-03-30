// Begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function computerPlay() {
    let num = Math.random()*100;
    if (num <= 33) return 'Rock';
    else if (num > 66) return 'Paper';
    else return 'Scissors';
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock".

function playRound(playerSelection, computerSelection) {
    let roundMessage = 'Something went wrong...';
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.substr(1).toLowerCase();

    if (playerSelection == 'Rock' && computerSelection == 'Scissors' || 
        playerSelection == 'Paper' && computerSelection == 'Rock' || 
        playerSelection == 'Scissors' && computerSelection == 'Paper') {
            playerScore += 1;
            roundMessage = "You Win! " + playerSelection + " beats " + computerSelection + ".";
        }
    else  if (playerSelection == 'Rock' && computerSelection == 'Paper' || 
              playerSelection == 'Paper' && computerSelection == 'Scissors' || 
              playerSelection == 'Scissors' && computerSelection == 'Rock') {
                    computerScore += 1;
                    roundMessage = "You Lose! " + computerSelection + " beats " + playerSelection + ".";
        }
    else roundMessage = "Draw!"

    console.log(roundMessage);
    return roundMessage;
    }
    
// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
    playerScore = 0;
    computerScore = 0;
    let winner;
    let finalMessage = 'Something went wrong...';

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper ot Scissors?");
        playRound(playerSelection, computerPlay());
        console.log("You scored " + playerScore + " and Computer scored " + computerScore + ".")
    }
    if (playerScore > computerScore) finalMessage = "YOU WIN!";
    else if (playerScore < computerScore) finalMessage = "COMPUTER WINS!";
    else finalMessage = "DRAW! Play again!";

    console.log(finalMessage);
    return finalMessage;
}

let playerScore = 0;
let computerScore = 0;
game();