// VARIABLES AND CONDITIONS
const scoreP1 = document.querySelector("#global-p1");
const scoreP2 = document.querySelector("#global-p2");
const spinner1 = document.querySelector("#spin1");
const spinner2 = document.querySelector("#spin2");
const bgSwitch = document.querySelector("#bg");
const currentP1 = document.getElementById("round-p1");
const currentP2 = document.getElementById("round-p2");
const hold = document.querySelector("#hold");
const newGame = document.querySelector("#new-game");
const player1 = document.querySelector("#player-1");
const player2 = document.querySelector("#player-2");
const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

// CHANGE PLAYER
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

//**********ROLL DICE

document.querySelector("#roll-dice").addEventListener("click", roll);

//RANDOM NUMBER
function randomNumber() {
  return Math.ceil(Math.random()*6);
}
function roll() {
  const randomDice = randomNumber();
  console.log(randomDice);
  // CHANGE IMG DICE
  let imgDice = document.querySelector("#img-1");
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

//********* HOLD

hold.addEventListener("click", function(){
  scores[activePlayer] += currentScore;
  document.getElementById(`global-p${activePlayer}`).textContent = scores[activePlayer];
  // CHANGE PLAYER
  changePlayer();
})

//******BRUITAGE 

function play() {
  var audio = document.getElementById("audio");
  audio.playbackRate = 1.9;
  audio.play();
}


  
