// model
const RSP = ["Rock", "Scissor", "Paper"];
const resultArr = [];
let resultBoard;
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
  //this condition shows game board if player wins
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
    : // this condition shows game board if computer wins
    computerScore >= 10
    ? (document.getElementById("app").innerHTML = `<div id="page">
    <div class="header"> <h4 style="color:${finalCol}">Game over you Loose!!</h4> 
    <h5> GameBoard: </h5>
    <div class="computerStrike">${resultArr.map((item, val) => {
      return `<p>Round: ${val++ + 1} - Player striked: ${
        item.player
      }</p> <p>Computer Striked: ${item.computer}</p>`;
    })}</div> 
   </div>`)
    : // this condition shows the play game button.
    playGame === false
    ? (document.getElementById("app").innerHTML = `
    <div class="header" > <button class="header" onclick="startTheGame()">Start game!</button> 
    `)
    : // this last default condition shows the game if we press the play game: set playGame to true
      (document.getElementById("app").innerHTML = `<div id="page">
    <div class="header">Rock Paper Scissor</div>
    <div class="score" style="color: ${color}">${playerScore} - ${computerScore}<div>
    <div class="computerStrike">${playerStrike}-${computerStrike} </div>
    <div style="color:${color}" class="callback">${callback}</div>
    <button value="Rock" id="btnOne" onclick="(gameEvaluator(this.value))"><img src="rock.png" ></button>
    <button value="Paper" id="btnTwo" onclick="(gameEvaluator(this.value))"><img src="paper.png" ></button>
    <button value="Scissor" id="btnThree" onclick="(gameEvaluator(this.value))"><img src="scissor.png" ></button>
    
    </div>`);
}
