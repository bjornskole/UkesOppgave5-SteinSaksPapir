// controller

function gameEvaluator(strike) {
  let randomNR = Math.floor(Math.random() * 3);
  computerStrike = RSP[randomNR];
  resultArr.push({ player: strike, computer: computerStrike });
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
    ? ((callback = "you win the round, paper beats rock"), (val = "Victory"))
    : strike === "Rock" && computerStrike === "Paper"
    ? ((callback = "You lost the round, paper beats rock"), (val = "Loss"))
    : strike === "Scissor" && computerStrike === "Paper"
    ? ((callback = "You win the round, scissors beats paper"),
      (val = "Victory"))
    : strike === "Paper" && computerStrike === "Scissor"
    ? ((callback = "You lost the round, scissors beats paper"), (val = "Loss"))
    : strike === "Rock" && computerStrike === "Scissor"
    ? ((callback = "You win the round, rock beats scissors"), (val = "Victory"))
    : strike === "Scissor" && computerStrike === "Rock"
    ? ((callback = "You lost the round, rock beats scissors"), (val = "Loss"))
    : "null";
  return val;
}

const startTheGame = () => {
  (playGame = true), app();
};
