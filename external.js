let playerScore = 0;
let computerScore = 0;

const messageDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent, computerPlay());
    });
});

function computerPlay() {
    let num = Math.random()*100;
    if (num <= 33) return 'Rock';
    else if (num > 66) return 'Paper';
    else return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == 'Rock' && computerSelection == 'Scissors' || 
        playerSelection == 'Paper' && computerSelection == 'Rock' || 
        playerSelection == 'Scissors' && computerSelection == 'Paper') {
            let result = "You win!";
            playerScore++;
            showRoundMsg(playerSelection, computerSelection, result);
        }
    else  if (playerSelection == 'Rock' && computerSelection == 'Paper' || 
              playerSelection == 'Paper' && computerSelection == 'Scissors' || 
              playerSelection == 'Scissors' && computerSelection == 'Rock') {
                let result = "You lose!";
                computerScore++;
                showRoundMsg(playerSelection, computerSelection, result);
        }
    else {
        let result = "Draw!"
        showRoundMsg(playerSelection, computerSelection, result);
    }

    showScoreMsg();

    if (playerScore == 5 || computerScore == 5) {
        showFinalMsg();
        resetScore();
    }

    return;
    }

function showRoundMsg(playerSelection, computerSelection, result) {
    messageDiv.textContent = `${playerSelection} V.S. ${computerSelection} - ${result}`;
}

function showScoreMsg() {
    scoreDiv.textContent = `Your score: ${playerScore}  -  Computer's score: ${computerScore}`;
}

function showFinalMsg() {
    messageDiv.textContent = (playerScore > computerScore) ? "YOU SCORED 5! YOU WIN THE GAME!" : "GAME OVER! COMPUTER SCORED 5!";
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}
    