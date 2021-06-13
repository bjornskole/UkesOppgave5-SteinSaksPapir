// controller
function gameEvaluator(strike) {
  let randomNR = Math.floor(Math.random() * 3);
  computerStrike = RSP[randomNR];
  let value = condition(strike);
  value === "Victory"
    ? ((color = "green"), playerScore++)
    : value === "Loss"
    ? ((color = "red"), computerScore++)
    : (color = "blue");
  playerScore >= 10
    ? (finalCol = "green")
    : computerScore >= 10
    ? (finalCol = "red")
    : (finalCol = "black");
  app();
}
function condition(strike, val) {
  playerStrike = strike;
  strike === computerStrike
    ? (callback = "Draw")
    : strike === "Paper" && computerStrike === "Rock"
    ? ((callback = "you Win, Paper beats Rock"), (val = "Victory"))
    : strike === "Rock" && computerStrike === "Paper"
    ? ((callback = "You Lost, Paper beats Rock"), (val = "Loss"))
    : strike === "Scissor" && computerStrike === "Paper"
    ? ((callback = "You win, Scissors beats paper"), (val = "Victory"))
    : strike === "Paper" && computerStrike === "Scissor"
    ? ((callback = "You lost, Scissors beats Paper"), (val = "Loss"))
    : strike === "Rock" && computerStrike === "Scissor"
    ? ((callback = "You win, Rock beats Scissors"), (val = "Victory"))
    : strike === "Scissor" && computerStrike === "Rock"
    ? ((callback = "You lost, Rock beats Scissors"), (val = "Loss"))
    : "null";
  return val;
}
