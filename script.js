// score vars

let computerScore = 0;
let humanScore = 0;

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
