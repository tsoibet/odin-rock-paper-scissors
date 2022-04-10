let playerScore = 0;
let computerScore = 0;

const msgBoard = document.querySelector('#msgBoard');
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
    msg = document.createElement("div");
    msg.textContent = `${playerSelection} V.S. ${computerSelection} ... ${result}`;
    msgBoard.insertBefore(msg, msgBoard.firstChild);
}

function showScoreMsg() {
    msg = document.createElement("div");
    msg.textContent = `< Your score: ${playerScore} > < Computer's score: ${computerScore} >`;
    msgBoard.insertBefore(msg, msgBoard.firstChild);
}

function showFinalMsg() {
    msg = document.createElement("div");
    msg.innerHTML = "***********************************<br>";
    if (playerScore > computerScore) {
        msg.innerHTML += "* YOU SCORED 5! YOU WIN THE GAME! *<br>"; 
    } else {
        msg.innerHTML += "*  GAME OVER! COMPUTER SCORED 5!  *<br>";
    }
    msg.innerHTML += "***********************************";
    msgBoard.insertBefore(msg, msgBoard.firstChild);
    msg = document.createElement("div");
    msg.textContent = "You may play again at anytime.";
    msgBoard.insertBefore(msg, msgBoard.firstChild);
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}
    