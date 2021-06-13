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
let finalCol = "blue";

// view

app();
function app() {
  playerScore >= 10
    ? (document.getElementById("app").innerHTML = `<div id="page">
  <div  class="header" style="color:${finalCol}">Game over you Win!!</div> 
  </div>`)
    : computerScore >= 10
    ? (document.getElementById("app").innerHTML = `<div id="page">
    <div class="header" style="color:${finalCol}" >Game over you Loose!!</div> 
    </div>`)
    : (document.getElementById("app").innerHTML = `<div id="page">
  <div class="header">Rock Scissor Paper</div>
  <div class="score" style="color: ${color}">${playerScore} - ${computerScore}<div>
  <div class="computerStrike">${playerStrike}-${computerStrike} </div>
  <div style="color:${color}" class="callback">${callback}</div>
  <button value="Rock" id="btnOne" onclick="(gameEvaluator(this.value))">Rock</button>
  <button value="Scissor" id="btnTwo" onclick="(gameEvaluator(this.value))">Scissor</button>
  <button value="Paper" id="btnThree" onclick="(gameEvaluator(this.value))">Paper</button>
  </div>`);
}
