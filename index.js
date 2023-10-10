var diceRoll1 = Math.floor(Math.random() * 6 + 1);

document.querySelector(".img1").setAttribute("src", "./images/dice" + diceRoll1 + ".png");

var diceRoll2 = Math.floor(Math.random() * 6 + 1);

document.querySelector(".img2").setAttribute("src", "./images/dice" + diceRoll2 + ".png");

if (diceRoll1 === diceRoll2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
else if (diceRoll1 > diceRoll2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! &#128681";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
}
