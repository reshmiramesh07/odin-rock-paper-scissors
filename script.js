console.log("naegiri");

// Write the logic to get the computer choice
// choice = rand int from 0-2. 0=rock, 1=paper, 2=scissors
// console log that choice
function getComputerChoice() {
  let choice = Math.random() * 3;
  console.log(choice);
  if (choice <= 1) {
    console.log("rock");
  } else if (choice <= 2) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
}

getComputerChoice();
