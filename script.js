function getComputerChoice() {
  const computer = Math.floor(Math.random() * 3) + 1;
  //   console.log(computer);
  return computer;
}

function getPlayerChoice() {
  const playerChoice = prompt("input your choice rock | paper | scissor");
  //   console.log(player);
  if (playerChoice.toLowerCase() === "rock") {
    return 1;
  } else if (playerChoice.toLowerCase() === "paper") {
    return 2;
  } else if (playerChoice.toLowerCase() === "scissor") {
    return 3;
  } else {
    alert("YOU MUST CHOOSE BETWEEN ROCK PAPER SCISSOR !");
  }
}
let computerScore = 0;
let playerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("it's a tie");
  } else if (
    (humanChoice == 1 && computerChoice == 2) ||
    (humanChoice == 2 && computerChoice == 3) ||
    (humanChoice == 3 && computerChoice == 1)
  ) {
    computerScore = computerScore + 1;
    console.log("the computer win this round");
  } else if (
    (humanChoice == 1 && computerChoice == 3) ||
    (humanChoice == 3 && computerChoice == 2) ||
    (humanChoice == 2 && computerChoice == 1)
  ) {
    playerScore = playerScore + 1;
    console.log("you win this round");
  }
}

function playGames() {
  for (let i = 0; i < 5; i++) {
    var humanChoice = getPlayerChoice();
    // console.log(player);
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(playerScore);
    console.log(computerScore);
  }
  if (playerScore > computerScore) {
    alert("YOU WIN THE GAME");
  } else {
    alert("YOU LOSE THE GAME :(");
  }
}

playGames();
