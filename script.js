// VARIABLES AND CONDITIONS
const scoreP1 = document.querySelector("#global-p0");
const scoreP2 = document.querySelector("#global-p1");
const spinner1 = document.querySelector("#spin1");
const spinner2 = document.querySelector("#spin2");
const bgSwitch = document.querySelector("#bg");
const currentP1 = document.getElementById("round-p0");
const currentP2 = document.getElementById("round-p1");
const hold = document.querySelector("#hold");
const newGame = document.querySelector("#new-game");
const player1 = document.querySelector("#player-1");
const player2 = document.querySelector("#player-2");
const buttonB = document.querySelector("#button-b");
let imgDice = document.querySelector("#img-1");
let currentScore, activePlayer, scores, playing;


//*********INITIALISATION****************

const init = () => {
  imgDice.style.visibility = "visible";
  buttonB.style.visibility = "visible";
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  currentP1.textContent = 0;
  currentP2.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  spinAndBgChange();
  newGame.style.top = "-20px";
}

init() ;

//**************CHANGE PLAYER************

const changePlayer = function() {
  document.getElementById(`round-p${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1:0;
    currentScore = 0;
    player1.classList.toggle("player-active");
    player2.classList.toggle("player-active");
    spinAndBgChange();
}
function spinAndBgChange() {
  if (activePlayer == 0) {
    spinner1.style.visibility = "visible";
    spinner2.style.visibility = "hidden";
    bgSwitch.style.background = "linear-gradient(to right,rgb(255, 218, 218) 0%,rgb(255, 218, 218) 50%,white 50%,white 100%)";
  } else {
    spinner1.style.visibility = "hidden";
    spinner2.style.visibility = "visible";
    bgSwitch.style.background = "linear-gradient(to left,rgb(255, 218, 218) 0%,rgb(255, 218, 218) 50%,white 50%,white 100%)";
  }
}

//**********ROLL DICE*********

document.querySelector("#roll-dice").addEventListener("click", roll);

//RANDOM NUMBER
function randomNumber() {
  return Math.ceil(Math.random()*6);
}
function roll() {
  if(playing) {
    const randomDice = randomNumber();
    // CHANGE IMG DICE
    imgDice.src = "images/dice-" + randomDice + ".png";
    spinAndBgChange();
    if(randomDice !== 1){
      // ADD CURRENT SCORE
      currentScore += randomDice;
      document.getElementById(`round-p${activePlayer}`).textContent = currentScore;
    }else {
      changePlayer();
    }
  }
}

//*********HOLD**********

hold.addEventListener("click", function(){
  if(playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`global-p${activePlayer}`).textContent = scores[activePlayer];
    // CHECK VICTORY
    if(scores[activePlayer] >= 10){
      playing = false;
      imgDice.style.visibility = "hidden";
      buttonB.style.visibility = "hidden";
      newGame.style.top = "120px";
      playVictory();
      var player = `Player ${activePlayer + 1}`;
      setTimeout(function() { alert(`YOU WIN !!!!!!!! Le ${player} à gagné`); }, 1000);
    }else{
      // CHANGE PLAYER
    changePlayer();
    }
  }
})

//************NEW GAME**********

newGame.addEventListener("click", init)

//******BRUITAGE***********

function playRoll() {
  var audio = document.getElementById("audio-roll");
  audio.playbackRate = 8;
  audio.play();
}
function playHold() {
  var audio = document.getElementById("audio-hold");
  audio.playbackRate = 4;
  audio.play();
}
function playVictory() {
  var audio = new Audio("sons/you_win.mp3");
  audio.playbackRate = 1.5;
  audio.play();
}