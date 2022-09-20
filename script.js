//******BRUITAGE 

function play() {
    var audio = document.getElementById("audio");
    audio.playbackRate = 1.7;
    audio.play();
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
}
  



  
