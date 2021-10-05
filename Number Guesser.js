let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(human, pc, secret) {
  if (human < 0 || human > 9) return alert("Out of range");
  const humanScore = getAbsoluteDistance(human, secret);
  const pcScore = getAbsoluteDistance(pc, secret);

  if (pcScore < humanScore) return false;
  return true;
}

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

function updateScore(string) {
  if (string === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
