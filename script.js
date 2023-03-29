function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
  
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (playerChoice === 'rock') {
      if (computerChoice === 'paper') {
        return "You lose! Paper beats rock.";
      } else {
        return "You win! Rock beats scissors.";
      }
    } else if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return "You lose! Scissors beats paper.";
      } else {
        return "You win! Paper beats rock.";
      }
    } else if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "You lose! Rock beats scissors.";
      } else {
        return "You win! Scissors beats paper.";
      }
    } else {
      return "Invalid input! Please enter 'rock', 'paper', or 'scissors'.";
    }
  }
  

  function game() {
    for (let i = 1; i <= 5; i++) {
      const playerChoice = prompt(`Round ${i}: Choose rock, paper, or scissors.`);
      const computerChoice = getComputerChoice();
      console.log(`Round ${i}: ${playRound(playerChoice, computerChoice)}`);
    }
  }
  
  game();