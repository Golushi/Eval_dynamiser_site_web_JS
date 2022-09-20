// VARIABLES AND CONDITIONS
const scoreP1 = document.querySelector("#global-p1");
const scoreP2 = document.querySelector("#global-p2");
const spinner1 = document.querySelector("#spin1");
const spinner2 = document.querySelector("#spin2");
const currentP1 = document.getElementById("round-p1");
const currentP2 = document.getElementById("round-p2");
const hold = document.querySelector("#hold");
const newGame = document.querySelector("#new-game");
const scores = [0,0];
let currentScore = 0;
let activePlayer = 1;

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

  if(randomDice !==1){
    // ADD CURRENT SCORE
    currentScore += randomDice;
    document.getElementById(`round-p${activePlayer}`).textContent = currentScore;
  }else {
    // CHANGE PLAYER
    activePlayer = activePlayer === 1 ? 2:0;
  }
 
}


//******BRUITAGE 

function play() {
  var audio = document.getElementById("audio");
  audio.playbackRate = 1.7;
  audio.play();
}


  
