function playRound(playerSelection, computerSelection) {
  if (playerSelection===computerSelection) {
    return "It is a tie!"
  }
  if ((playerSelection==='Rock' && computerSelection =='Scissors') || (playerSelection==='Paper' && computerSelection =='Rock') || (playerSelection==='Scissors' && computerSelection =='Paper')) {
    return "You win! " + playerSelection + " beats " + computerSelection
  }
  else {
    return "You lose! " + computerSelection + " beats " + playerSelection
  }
}

function getComputerChoice () {
  let n = Math.floor(Math.random()*3);
  if (n===2) {
    return 'Rock'
  }
  else if (n===1) {
    return 'Paper'
  }
  else {
    return 'Scissors'
  }
}

const player = prompt("Enter selection of rock, paper, or scissors: "); 
const playerSelection = player.toUpperCase().at(0) + player.toLowerCase().slice(1);
const computerSelection = getComputerChoice ();

console.log(playRound(playerSelection, computerSelection));