var lay1 = Math.floor ( Math.random()*6+1 ) ;
var lay2 = Math.floor ( Math.random()*6+1 ) ;
var doc1 = document.querySelectorAll("img")[0];
var doc2 = document.querySelectorAll("img")[1];
var doc3 = document.querySelector("h1")
function play1(){

if (lay1 === 1) {
  doc1.setAttribute("src", "images/dice1.png")
}
else if (lay1 === 2) {
  doc1.setAttribute("src", "images/dice2.png")
}
else if (lay1 === 3) {
  doc1.setAttribute("src", "images/dice3.png")
}
else if (lay1 === 4) {
  doc1.setAttribute("src", "images/dice4.png")
}
else if (lay1 === 5) {
  doc1.setAttribute("src", "images/dice5.png")
}
else if (lay1 === 6) {
  doc1.setAttribute("src", "images/dice6.png")
}        }                      play1();




function play2(){

if (lay2 === 1) {
  doc2.setAttribute("src", "images/dice1.png")
}
else if (lay2 === 2) {
  doc2.setAttribute("src", "images/dice2.png")
}
else if (lay2 === 3) {
  doc2.setAttribute("src", "images/dice3.png")
}
else if (lay2 === 4) {
  doc2.setAttribute("src", "images/dice4.png")
}
else if (lay2 === 5) {
  doc2.setAttribute("src", "images/dice5.png")
}
else if (lay2 === 6) {
  doc2.setAttribute("src", "images/dice6.png")
}        }                      play2();



function title(){
  if (lay1 > lay2) {
    doc3.textContent = "Player 1 wins";
  }
  else if (lay1 < lay2) {
    doc3.textContent = "Player 2 wins";
  }
  else {
    doc3.textContent = "Draw";
  }
}                      title();
