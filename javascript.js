  
let humanScore = 0;
let computerScore = 0; 

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
}

function getHumanChoice() {
  const text = prompt("What is your choice?");
  const result = text.toLowerCase();
  if (result !== "rock" && result !== "paper" && result !== "scissors") {
    alert("Please choose 'rock', 'paper', or 'scissors'");
    getHumanChoice();
    }
  return result; 
}

function playRound(humanChoice, computerChoice){
  if(humanChoice == "paper" && computerChoice == "rock"){
    humanScore++;
  }
  else if(humanChoice == "rock" && computerChoice == "paper"){
    computerScore++;
  }
  else if(humanChoice == "paper" && computerChoice == "rock"){
    humanScore++;
  }
  else if(humanChoice == "rock" && computerChoice == "scissors"){
    humanScore++;
  }
  else if(humanChoice == "scissors" && computerChoice == "rock"){
    computerScore++;
  }
  else if(humanChoice == "scissors" && computerChoice == "paper"){
    humanScore++;
  }
  else if(humanChoice == "paper" && computerChoice == "scissors"){
    computerScore++;
  }
}

function playGame(){
  for(i = 0;i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if(humanScore > computerScore){
    alert("You win!");
  }
  else if(computerScore > humanScore){
    alert("You lose! Computer wins!")
  }
  else if(computerScore == humanScore){
    alert("Draw")
  }
}

playGame();
