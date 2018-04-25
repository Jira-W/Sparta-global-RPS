var i = 0;
var playerScore = 0;
var computerScore = 0;
var tie = 0;

while (i < 5) {
  var playerChoice = prompt("rock, paper or scissors?");
  if (playerChoice == "exit") {
    break;
  }
  if (playerChoice == "rock") {
    playerChoice = 0;
  } else if (playerChoice == "paper") {
    playerChoice = 1;
  } else {
    playerChoice = 2;
  }

  var computerChoice = Math.floor(((Math.random() * 3) + 1));
  if (computerChoice < 1) {
    computerChoice = 0;
  } else if (computerChoice <= 2) {
    computerChoice = 1;
  } else {
    computerChoice = 2;
  }

  var compare = function(playerChoice, computerChoice) {

    if (playerChoice == computerChoice) {
      tie++;
    } else if ((playerChoice - computerChoice + 3) % 3 == 1) {
      playerScore++;
    } else {
      computerScore++;
    }
  }


  var winner = compare(playerChoice, computerChoice);

  document.getElementById("wins").innerHTML = playerScore;
  document.getElementById("loses").innerHTML = computerScore;
  document.getElementById("tie").innerHTML = tie;
  i++;

  alert("Your score " + playerScore + " " + "Computer score " + computerScore + " Tie " + tie)
}
document.getElementById("round").innerHTML = i;
