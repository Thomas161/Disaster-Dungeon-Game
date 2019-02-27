var beast = Math.round(Math.random() * 1);
var player = Math.round(Math.random() * 1);
var h = document.getElementById("health");
var h1 = document.getElementById("health1");

function restartGame() {
    document.location.reload(true);
}

function success() {
    alert("Freedom bro");
}

function startGame() {
    document.getElementById("button");
    if (beast === 1 && player === 0) {
        var h = document.getElementById("health");
        h.value -= 100;
        alert("Beast knocked you for a loop, you'll never ecape purgatory");
        restartGame();
    } else if (beast === 1 && player === 1) {
        var h1 = document.getElementById("health1");
        h1.value -= 100;
        var h = document.getElementById("health");
        h.value -= 100;
        alert("Unfortunately you both simultaneously died, trapped inside a inescapble hell");
        restartGame();
    } else if (beast === 0 && player === 1) {
        var h1 = document.getElementById("health1");
        h1.value -= 100;
        alert("Good work my man, onto the next pleb");
        success();
    } else if (beast === 0 && player === 0) {
        alert("Both went in for the kill but failed miserably");
        restartGame();
    }
}