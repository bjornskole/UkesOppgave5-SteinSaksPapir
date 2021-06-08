// model
const RSP = ["Rock", "Scissor", "Paper"];
// computer model
let randomNR;
let computerStrike = "";
let playerStrike = "";
let callback = "Throw a strike";
let color = "black";
let playerScore = 0;
let computerScore = 0;

// view

app();
function app() {
  document.getElementById("app").innerHTML = `<div id="page">
  <div class="header">Rock Scissor Paper</div>
  <div class="score" style="color: ${color}">${playerScore} - ${computerScore}<div>
  <div class="computerStrike">${playerStrike}-${computerStrike} </div>
  <div style="color:${color}" class="callback">${callback}</div>
  <button value="Rock" id="btnOne" onclick="(gameEvaluator(this.value))">Rock</button>
  <button value="Scissor" id="btnTwo" onclick="(gameEvaluator(this.value)">Scissor</button>
  <button value="Paper" id="btnThree" onclick="(gameEvaluator(this.value)">Paper</button>
  </div>`;
}
