// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage = "red-dice"+randomNumber1+".png";

// var randomImageSource = "image3/"+randomDiceImage;

// var image1=document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImage = "red-dice"+randomNumber2+".png";

// var randomImageSource = "image3/"+randomDiceImage;

// var image2=document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImageSource);

// if (randomNumber1 > randomNumber2){
//      document.querySelector("h1").innerHTML = "player 1 wins";
// }
// else if(randomNumber1 < randomNumber2){
//     document.querySelector("h1").innerHTML = "player 2 wins";
// }
// else{
//      document.querySelector("h1").innerHTML = "draw";
// }




// function rollDice() {
//   var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//   var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//   document.querySelectorAll("img")[0].setAttribute("src", "image3/red-dice" + randomNumber1 + ".png");
//   document.querySelectorAll("img")[1].setAttribute("src", "image3/red-dice" + randomNumber2 + ".png");

//   if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
//   } else if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//   } else {
//     document.querySelector("h1").innerHTML = "Draw!";
//   }
// }


let score1 = 0;
let score2 = 0;

function rollDice() {
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelectorAll("img")[0].setAttribute("src", "image3/red-dice" + randomNumber1 + ".png");
  document.querySelectorAll("img")[1].setAttribute("src", "image3/red-dice" + randomNumber2 + ".png");
  

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    score1++;
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    score2++;
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

  document.getElementById("score1").innerHTML = "Player 1 Score: " + score1;
  document.getElementById("score2").innerHTML = "Player 2 Score: " + score2;
}
