let playerScore = 0;
let computerScore = 0;

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function computerPlay() {
    let num = Math.random()*100;
    if (num <= 33) return 'Rock';
    else if (num > 66) return 'Paper';
    else return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    let roundMessage = 'Something went wrong...';
    playerSelection = playerSelection.slice(0,1).toUpperCase() + playerSelection.substr(1).toLowerCase();

    if (playerSelection == 'Rock' && computerSelection == 'Scissors' || 
        playerSelection == 'Paper' && computerSelection == 'Rock' || 
        playerSelection == 'Scissors' && computerSelection == 'Paper') {
            playerScore++;
            roundMessage = `You Win! ${playerSelection} beats ${computerSelection}.`;

        }
    else  if (playerSelection == 'Rock' && computerSelection == 'Paper' || 
              playerSelection == 'Paper' && computerSelection == 'Scissors' || 
              playerSelection == 'Scissors' && computerSelection == 'Rock') {
                computerScore++;
                roundMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        }
    else roundMessage = `Draw!`;


    scoreDiv.textContent = `You scored ${playerScore} and Computer scored ${computerScore}.`;
    messageDiv.textContent = roundMessage;

    if (playerScore == 5 || computerScore == 5) {
        messageDiv.textContent = (playerScore > computerScore)? "YOU ARE THE FINAL WINNER!":"COMPUTER IS THE FINAL WINNER!";
        resetScore();
    }

    return;
    }

const messageDiv = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});
const scoreDiv = document.querySelector('#score');
