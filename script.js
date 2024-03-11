const strikeButton = document.getElementById("strikes");

const resetButton = document.getElementById("reset");

const team1score = document.getElementById("score-team1");
const team2score = document.getElementById("score-team2");

const team1Wicket =document.getElementById("wickets-team1");
const team2Wicket = document.getElementById("wickets-team2");

var team1ScoreInit = 0;
var team2ScoreInit = 0;

var team1WicketInit = 0;
var team2WicketInit = 0;

var playerTurn = 1;
var team1Ball = 0;
var team2Ball = 0;
const possibleOutcomes = [0,1,2,3,4,6,"W"]

    strikeButton.onclick = () => {
        const randomRuns =
          possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
      
             if (playerTurn === 2) {
          
          team2Ball++;
        
          document.querySelector(
            `#team2-superover div:nth-child(${team2Ball})`
          ).textContent = randomRuns;
          
          if (randomRuns === "W") {
            team2WicketInit++;
          }
        
          else {
            team2ScoreInit += randomRuns;
          }
         
          if (
            team2Ball=== 6 ||
            team2WicketInit === 2 ||
            team2ScoreInit > team1ScoreInit
          ) {
            turn = 3;
            gameOver();
          }
        }
      
        if (playerTurn === 1) {
          team1Ball++;
          document.querySelector(
            `#team1-superover div:nth-child(${team1Ball})`
          ).textContent = randomRuns;
          if (randomRuns === "W") {
            team1WicketInit++;
          } else {
            team1ScoreInit += randomRuns;
          }
          if (team1Ball === 6 || team1Wicket=== 2) playerTurn = 2;
        }
        updateScore();
      };

resetButton.onclick = () => {
    window.location.reload();
};


function gameOver(){
    if(team1ScoreInit >team2ScoreInit)
    {
        alert("IND WON THE GAME");
    }
    else if(team1ScoreInit < team2ScoreInit)
    {
        alert("PAK WON THE GAME");
    }
    else{
        alert("ITS A DRAW");
    }
}

function updateScore(){
    team1score.textContent = team1ScoreInit;
    team2score.textContent = team2ScoreInit;
    team1Wicket.textContent = team1WicketInit;
    team2Wicket.textContent = team2WicketInit;

}