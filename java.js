let pWins = 0;
let cWins = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  console.log(playRound("Rock"));
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  console.log(playRound("Paper"));
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  console.log(playRound("Scissors"));
});

const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const result = document.querySelector('#result');

function playRound(selection) {
  const playerSelection = selection;
  const computerSelection = getComputerChoice ();

  if (pWins < 5 && cWins < 5) {
    if (playerSelection===computerSelection) {
      result.textContent = "It is a tie!";
    }
    else if ((playerSelection==='Rock' && computerSelection =='Scissors') || 
    (playerSelection==='Paper' && computerSelection =='Rock') || 
    (playerSelection==='Scissors' && computerSelection =='Paper')) {
      ++pWins;
      player.textContent = "Player Score: " + pWins;
      result.textContent = "You win! " + playerSelection + " beats " + computerSelection + ".";
    }
    else if ((computerSelection==='Rock' && playerSelection =='Scissors') || 
    (computerSelection==='Paper' && playerSelection =='Rock') || 
    (computerSelection==='Scissors' && playerSelection =='Paper')) {
      ++cWins;
      computer.textContent = "Computer Score: " + cWins;
      result.textContent = "You lose! " + computerSelection + " beats " + playerSelection + ".";
    };
  }
  else if (pWins==5) {
    alert("You win the game! You have won 5 rounds before the computer. Great job!");
    pWins = 0;
    cWins = 0;
    player.textContent = "Player Score: " + pWins;
    computer.textContent = "Computer Score: " + cWins;
    result.textContent = ""
  }
  else if (cWins==5) {
    alert("You lose the game. The computer has won 5 rounds before you. Please try again.");
    pWins = 0;
    cWins = 0;
    player.textContent = "Player Score: " + pWins;
    computer.textContent = "Computer Score: " + cWins;
    result.textContent = ""
  }
};

function getComputerChoice () {
  let n = Math.floor(Math.random()*3);
  if (n===2) {
    return "Rock";
  }
  else if (n===1) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
};