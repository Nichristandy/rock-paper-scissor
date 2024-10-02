const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
const startBtn = document.getElementById("start");
const playerSymbol = document.getElementById("playerChoice");
const compSymbol = document.getElementById("computerChoice");
const playerScoreUi = document.getElementById("humanScore");
const compScoreUi = document.getElementById("computerScore");

// console.log(rockBtn);
let round = 0;
const totalRounds = 3;

function getComputerChoice() {
  const computer = Math.floor(Math.random() * 3) + 1;
  //   console.log(computer);
  if (computer === 1) {
    compSymbol.querySelector("p").textContent = "rock";
  } else if (computer === 2) {
    compSymbol.querySelector("p").textContent = "paper";
  } else if (computer === 3) {
    compSymbol.querySelector("p").textContent = "scissor";
  }

  return computer;
}

function getPlayerChoice(choices) {
  // const playerChoice = prompt("input your choice rock | paper | scissor");
  playerSymbol.querySelector("p").textContent = choices;
  //   console.log(player);
  if (choices === "rock") {
    return 1;
  } else if (choices === "paper") {
    return 2;
  } else if (choices === "scissor") {
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
    compScoreUi.textContent = `computer score: ${computerScore}`;
  } else if (
    (humanChoice == 1 && computerChoice == 3) ||
    (humanChoice == 3 && computerChoice == 2) ||
    (humanChoice == 2 && computerChoice == 1)
  ) {
    playerScore = playerScore + 1;
    playerScoreUi.textContent = `player score: ${playerScore}`;
  }
}

function handlePlayerChoice(choice) {
  if (round < totalRounds) {
    const playerChoice = getPlayerChoice(choice);
    const computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);
    round++;
  }

  if (round === totalRounds) {
    if (playerScore > computerScore) {
      alert("You win this game");
    } else if (playerScore < computerScore) {
      alert("You lost this game");
    } else {
      alert("TIED");
    }
  }
}

function playGames() {
  round = 0;
  playerScore = 0;
  computerScore = 0;
  compScoreUi.textContent = `computer score: ${computerScore}`;
  playerScoreUi.textContent = `player score: ${playerScore}`;
}

rockBtn.addEventListener("click", () => handlePlayerChoice("rock"));
paperBtn.addEventListener("click", () => handlePlayerChoice("paper"));
scissorBtn.addEventListener("click", () => handlePlayerChoice("scissor"));

startBtn.addEventListener("click", () => playGames());
