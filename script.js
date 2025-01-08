// Write the logic to get the computer choice
// choice = rand int from 0-2. 0=rock, 1=paper, 2=scissors
// console log that choice

const validChoice = ["ROCK", "PAPER", "SCISSORS"];

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

function getHumanChoice() {
  let hChoice = prompt("Rock, paper, or scissors? ").toLowerCase();
  while (hChoice !== "rock" && hChoice !== "paper" && hChoice !== "scissors") {
    hChoice = prompt(
      "Invalid choice. \nRock, paper, or scissors? "
    ).toLowerCase();
  }
  return hChoice;
}

console.log(getHumanChoice());
