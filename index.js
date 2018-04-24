var i = 0;
var playerScore = 0;
var computerScore = 0;
var tie =0;
while (i<5){

var playerChoice = prompt("Rock, Paper or Scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

var compare = function(choice1, choice2) {

  if (choice1 === choice2) {
    tie++;
    return "The result is a tie!";
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      playerScore++;
      return "rock wins";
    } else {
      computerScore++;
      return "paper wins";
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      playerScore++;
      return "paper wins";
    } else {
      computerScore++;
      return "scissors wins";
    }

  } else if (choice1 === "scissors") {
    if (choice2 === "rock") {
      computerScore ++;
      return "rock wins";
    } else {
      playerScore ++;
      return "scissors win";
    }
  }
}


var winner = compare(playerChoice,computerChoice);

document.getElementById("wins").innerHTML= playerScore;
document.getElementById("loses").innerHTML= computerScore;
document.getElementById("tie").innerHTML= tie;
i++;
console.log(playerScore);
alert("Your score " + playerScore + " " + "Computer score "+ computerScore + " Tie " + tie)
}
document.getElementById("round").innerHTML= i;
