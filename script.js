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
  

