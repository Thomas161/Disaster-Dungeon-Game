// alert("You awake in a cell, cold, dank and alien. A decrepit man sits across from you, skin barely hanging from his frame. He opens his mouth and says, the way out lies at the end of that corridor, between you and salvation lie three beasts you must slay, if you choose to stay in this cell you will die!!!");
// confirm("Do you take up arms and fight?");


//global variables
var beast = Math.round(Math.random()*1);
var player = Math.round(Math.random()*1);
var h = document.getElementById("health");
var h1 = document.getElementById("health1");

//functions
 function restartGame(){
   document.location.reload(true);
}
function success(){
    alert("Freedom bro");
}

function startGame(){
   document.getElementById("button");
 if(beast === 1 && player === 0){
    var h = document.getElementById("health");
    h.value -= 100;
    alert("Beast knocked you for a loop, you'll never ecape purgatory");
    restartGame();
}
else if(beast === 1 && player === 1){
    var h1 = document.getElementById("health1");
    h1.value -= 100;
    var h = document.getElementById("health");
    h.value -=100;
    alert("Unfortunately you both simultaneously died, trapped inside a inescapble hell");
    restartGame();
}
else if(beast === 0 && player === 1){
    var h1 = document.getElementById("health1");
    h1.value -=100;
    alert("Good work my man, onto the next pleb");
    success();
}
else if(beast === 0 && player === 0){
    alert("Both went in for the kill but failed miserably");
  restartGame();
}
}




//create variables to use//random number generator stored in beast variable
//create use input choice(vraiable), compare using operators against beast 
//
//functions that start/advance and restart game
//create control flow for success/death
//


