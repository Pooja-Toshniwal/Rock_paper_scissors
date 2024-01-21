// min and max both included randpm number function
//         function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
var p = 0;
var comp = 0;
function getRnd() {
    var array = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * (3)) + 0;
    return array[index];
};
function lose(player, computer) {
    comp++;
    document.getElementById("Choice").innerHTML = `You lose ${computer} beats ${player}`;
};
function win(player, computer) {
    document.getElementById("Choice").innerHTML = `You win ${player} beats ${computer}`;
    p++;
};
function tie(player, computer) {
    document.getElementById("Choice").innerHTML = "TIE!";
};
function score() {
    document.getElementById("Score").innerHTML = `Player : ${p} Computer : ${comp}`;
    if (p + comp == 5) {
        if (p > comp) {
            document.getElementById("winner").innerHTML = `Game over you win`;
        }
        else {
            document.getElementById("winner").innerHTML = `Game over you lose`;
        }
        p = 0;
        comp = 0;
    };
}
const Rock = () => {
    document.getElementById("winner").innerHTML = "";
    console.log("In");
    const computer = getRnd();
    document.getElementById("computer").innerHTML = `Computer choice: ${computer}`;
    if (computer == "scissors") {
        win("rock", computer);
    }
    else if (computer == "paper") {
        lose("rock", computer);
    }
    else {
        tie();
    }
    score();
}
const Paper = () => {
    document.getElementById("winner").innerHTML = "";
    const computer = getRnd();
    document.getElementById("computer").innerHTML = `Computer choice: ${computer}`;
    if (computer == "scissors") {
        lose("paper", computer);
    }
    else if (computer == "rock") {
        win("paper", computer);
    }
    else {
        tie();
    }
    score();
};
const Scissors = () => {
    document.getElementById("winner").innerHTML = "";
    const computer = getRnd();
    document.getElementById("computer").innerHTML = `Computer choice: ${computer}`;
    if (computer == "rock") {
        lose("scissors", computer);
    }
    else if (computer == "paper") {
        win("scissors", computer);
    }
    else {
        tie();
    }
    score();
};