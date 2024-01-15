let p = 0;
let c = 0;

function playRound() {
  const player = prompt("Enter selection of rock, paper, or scissors: "); 
  const playerSelection = player.toUpperCase().at(0) + player.toLowerCase().slice(1);
  const computerSelection = getComputerChoice ();

  if (playerSelection===computerSelection) {
    return "It is a tie!";
  }
  else if ((playerSelection==='Rock' && computerSelection =='Scissors') || (playerSelection==='Paper' && computerSelection =='Rock') || (playerSelection==='Scissors' && computerSelection =='Paper')) {
    ++p;
    return "You win! " + playerSelection + " beats " + computerSelection;
  }
  else if ((computerSelection==='Rock' && playerSelection =='Scissors') || (computerSelection==='Paper' && playerSelection =='Rock') || (computerSelection==='Scissors' && playerSelection =='Paper')) {
    ++c;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
  else {
    alert(player + " is invalid input. For next game you must enter selection of rock, paper, or scissors.");
    return "Invalid user input resulted in cancelled round.";
  }
}

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
}

function game () {
  while (p<5 && c<5) {
    console.log(playRound());
  }
  if (p==5) {
    return console.log("You win the game! You have won 5 rounds before the computer. Great job!");
  }
  else {
    return console.log("You lose the game. The computer has won 5 rounds before you. Please try again.");
  }
}

game();