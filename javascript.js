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

function playGame(humanSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);
  alert(result);
  alert(`Scores: You - ${humanScore}, Computer - ${computerScore}`);
}
    
  // manipulating the DOM

document.getElementById("rock").addEventListener("click", function(){
  playGame("rock");
});
document.getElementById("paper").addEventListener("click", function(){
  playGame("paper");
});
document.getElementById("scissors").addEventListener("click", function(){
  playGame("scissors");
});
