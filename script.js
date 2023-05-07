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
const results = document.querySelector("#results");
let playerScore = 0;
let computerScore = 0;

function updateScore(roundWinner) {
  if (roundWinner === "player") {
    playerScore++;
  } else if (roundWinner === "computer") {
    computerScore++;
  }

  if (playerScore === computerScore) {
    results.textContent = `It's a tie! | Player Score: ${playerScore} | Computer Score: ${computerScore}`;
  } else {
    results.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
  }

  if (playerScore === 5) {
    results.textContent = 'Congratulations, you won the game!' 
  } else if (computerScore === 5) {
    results.textContent = 'Too bad, the Computer has beaten you!'
  }

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


/*
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
  
    while (playerScore < 5 && computerScore < 5) {
      const playerSelection = prompt(`Round ${round}: Choose rock, paper, or scissors.`);
      const computerSelection = getComputerChoice();
      const roundWinner = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
  
      if (roundWinner === 'player') {
        playerScore++;
      } else if (roundWinner === 'computer') {
        computerScore++;
      }
  
      console.log(`Round ${round}: ${roundWinner}`);
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${computerScore}`);
  
      round++;
    }
  
    if (playerScore > computerScore) {
      console.log('You win the game!');
    } else if (playerScore < computerScore) {
      console.log('You lose the game!');
    } else {
      console.log('Tie game!');
    }
  }
  
  game();
  
*/
