function getComputerChoice () {
  let n = Math.floor(Math.random()*3);
  if (n===2) {
    comp = 'Rock'
  }
  else if (n===1) {
    comp = 'Paper'
  }
  else {
    comp = 'Scissors'
  }
}

getComputerChoice ()
console.log(comp)