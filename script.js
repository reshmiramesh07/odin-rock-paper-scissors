// get computer choice
function getComputerChoice() {
  let cChoice = Math.random() * 3;
  console.log(cChoice);
  if (cChoice <= 1) {
    return "rock";
  } else if (cChoice <= 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// get human choice
function getHumanChoice() {
  let hChoice = prompt("Rock, paper, or scissors? ").toLowerCase();
  while (hChoice !== "rock" && hChoice !== "paper" && hChoice !== "scissors") {
    hChoice = prompt(
      "Invalid choice. \nRock, paper, or scissors? "
    ).toLowerCase();
  }
  return hChoice;
}

function playRound(humanChoice, computerChoice) {
  let verdict = humanChoice + " beats " + computerChoice;
  let outcome = "lose";
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      outcome = "tie";
    } else if (computerChoice == "paper") {
      outcome = "lose";
    } else if (computerChoice == "scissors") {
      outcome = "win";
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      outcome = "win";
    } else if (computerChoice == "paper") {
      outcome = "tie";
    } else if (computerChoice == "scissors") {
      outcome = "lose";
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      outcome = "lose";
    } else if (computerChoice == "paper") {
      outcome = "win";
    } else if (computerChoice == "scissors") {
      outcome = "tie";
    }
  }

  if (outcome == "lose") {
    verdict = computerChoice + " beats " + humanChoice + ".";
    console.log("You " + outcome + "! " + verdict);
  } else if (outcome == "tie") {
    console.log("You tied!");
  } else {
    console.log("You " + outcome + "! " + verdict + ".");
  }
}

// playGame();

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", playRound("rock", getComputerChoice()));
btnPaper.addEventListener("click", playRound("paper", getComputerChoice()));
btnScissors.addEventListener(
  "click",
  playRound("scissors", getComputerChoice())
);
