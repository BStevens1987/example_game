let p = 0;
let c = 0;

function playRound() {
const player = prompt("Enter selection of rock, paper, or scissors: "); 
const playerSelection = player.toUpperCase().at(0) + player.toLowerCase().slice(1);
const computerSelection = getComputerChoice ();

  if (playerSelection===computerSelection) {
    return "It is a tie!"
  }
  if ((playerSelection==='Rock' && computerSelection =='Scissors') || (playerSelection==='Paper' && computerSelection =='Rock') || (playerSelection==='Scissors' && computerSelection =='Paper')) {
    ++p;
    return "You win! " + playerSelection + " beats " + computerSelection
  }
  else {
    ++c;
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

function game () {
  while (p<5 && c<5) {
    console.log(playRound());
  }
}


console.log(game());