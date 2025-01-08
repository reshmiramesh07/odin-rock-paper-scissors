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
  let hChoice = "rock";
  console.log(hChoice.toUpperCase());
  console.log("ROCK" in validChoice);
  //   while (hChoice.toUpperCase() in validChoice == false) {
  //     hChoice = prompt("Rock, paper, or scissors? ");
  //   }
  //   return hChoice;
}

console.log(getHumanChoice());
