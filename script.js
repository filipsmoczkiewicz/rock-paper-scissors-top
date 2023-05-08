//game 
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']; 
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  let roundWinner;

  if (playerSelection === computerSelection) {
    roundWinner = 'tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    roundWinner = 'player';
  } else if ( 
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    roundWinner = 'computer';
  }

  return roundWinner;
}

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const btnNewGame = document.querySelector("#btn-new-game");
const results = document.querySelector("#results");
let playerScore = 0;
let computerScore = 0;

function updateScore(roundWinner) {
  let roundResultMessage = '';
  if (roundWinner === "player") {
    playerScore++;
    roundResultMessage = "You won the round!";
  } else if (roundWinner === "computer") {
    computerScore++;
    roundResultMessage = "You lost the round!";
  } else {
    roundResultMessage = "It's a tie!";
  }

  let gameResultMessage = '';
  if (playerScore === 5) {
    gameResultMessage = 'Congratulations, you won the game!';
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    gameResultMessage = 'Too bad, the Computer has beaten you!';
    playerScore = 0;
    computerScore = 0;
  }

  if (gameResultMessage) {
    results.textContent = `${gameResultMessage}`;
  } else {
    results.textContent = `${roundResultMessage} Player Score: ${playerScore} | Computer Score: ${computerScore}`;
  }
}


function resetGameScore() {
  playerScore = 0;
  computerScore = 0;
  results.textContent = 'Player Score: 0 | Computer Score: 0';
}


btnRock.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const roundWinner = playRound("rock", computerSelection);
  updateScore(roundWinner);
});

btnPaper.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const roundWinner = playRound("paper", computerSelection);
  updateScore(roundWinner);
});

btnScissors.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const roundWinner = playRound("scissors", computerSelection);
  updateScore(roundWinner);
});

btnNewGame.addEventListener("click", () => {
  resetGameScore();
});