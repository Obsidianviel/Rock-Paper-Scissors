let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a draw!";
  } 
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "Computer wins this round!";
  }
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const winnerMessage = humanScore === 5 ? "Congratulations! You won the game!" : "Computer wins the game!";

    // Display the winner message
    const resultDiv = document.getElementById("result");
    const winnerP = document.createElement("p");
    winnerP.innerText = winnerMessage;
    winnerP.style.fontWeight = "bold"; // Make the winner message bold
    resultDiv.appendChild(winnerP);
    // Reset scores
    humanScore = 0;
    computerScore = 0;

    // update the score display
    const scoreP = document.createElement("p");
    scoreP.innerText = `Scores have been reset. You - ${humanScore}, Computer - ${computerScore}`;
    resultDiv.appendChild(scoreP);
  }
}

function playGame(humanSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);

  // Update the result div with the round result and scores
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `${result} Scores: You - ${humanScore}, Computer - ${computerScore}`;

  // Check if there's a winner
  checkWinner();
}

// Event listeners for buttons
document.getElementById("rock").addEventListener("click", function() {
  playGame("rock");
});
document.getElementById("paper").addEventListener("click", function() {
  playGame("paper");
});
document.getElementById("scissors").addEventListener("click", function() {
  playGame("scissors");
});

