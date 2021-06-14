// model
const RSP = ["Rock", "Scissor", "Paper"];
const resultArr = [];
let resultBoard;
// computer model
let randomNR;
let computerStrike = "";
let playerStrike = "";
let callback = "Throw a strike";
let color = "black";
let playerScore = 0;
let computerScore = 0;
let finalCol = "blue";
let playGame = false;

// view

app();
function app() {
  playerScore >= 10
    ? (document.getElementById("app").innerHTML = `<div id="page">
  <div  class="header"> <h4 style="color:${finalCol}">Game over you Win!!</h4>
  <h5> GameBoard: </h5>
  <div class="computerStrike">${resultArr.map((item, val) => {
    return `<p>Round: ${val++ + 1} - Player striked: ${
      item.player
    }</p> <p>Computer Striked: ${item.computer}</p>`;
  })}</div>
  </div> 
  
  </div>`)
    : computerScore >= 10
    ? (document.getElementById("app").innerHTML = `<div id="page">
    <div class="header"> <h4 style="color:${finalCol}">Game over you Loose!!</h4> 
    <h5> GameBoard: </h5>
    <div class="computerStrike">${resultArr.map((item, val) => {
      return `<p>Round: ${val++ + 1} - Player striked: ${
        item.player
      }</p> <p>Computer Striked: ${item.computer}</p>`;
    })}</div> 
   
    </div>`)
    : playGame === true
    ? (document.getElementById("app").innerHTML = `<div id="page">
  <div class="header">Rock Scissor Paper</div>
  <div class="score" style="color: ${color}">${playerScore} - ${computerScore}<div>
  <div class="computerStrike">${playerStrike}-${computerStrike} </div>
  <div style="color:${color}" class="callback">${callback}</div>
  <button value="Rock" id="btnOne" onclick="(gameEvaluator(this.value))">Rock</button>
  <button value="Scissor" id="btnTwo" onclick="(gameEvaluator(this.value))">Scissor</button>
  <button value="Paper" id="btnThree" onclick="(gameEvaluator(this.value))">Paper</button>
  </div>`)
    : (document.getElementById("app").innerHTML = `
  <div class="header" > <button onclick="startTheGame()">Start game!</button> 
  `);
}
