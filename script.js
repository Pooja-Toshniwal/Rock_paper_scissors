const computer_div = document.getElementById("computer_img");
const computer_rock = () => {
    computer_div.src = "rock.png";
};
const computer_paper = () => {
    computer_div.src = "paper.png";
};
const computer_scissors = () => {
    computer_div.src = "scissors.png";
};
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
        computer_div.src = "cp.jpg";

    };
}
const Rock = () => {
    document.getElementById("winner").innerHTML = "";
    const computer = getRnd();
    if (computer == "scissors") {
        computer_scissors();
        win("rock", computer);
    }
    else if (computer == "paper") {
        computer_paper();
        lose("rock", computer);
    }
    else {
        computer_rock();
        tie();
    }
    score();
}
const Paper = () => {
    document.getElementById("winner").innerHTML = "";
    const computer = getRnd();
    if (computer == "scissors") {
        computer_scissors();
        lose("paper", computer);
    }
    else if (computer == "rock") {
        computer_rock();
        win("paper", computer);
    }
    else {
        computer_paper();
        tie();
    }
    score();
};
const Scissors = () => {
    document.getElementById("winner").innerHTML = "";
    const computer = getRnd();
    if (computer == "rock") {
        computer_rock();
        lose("scissors", computer);
    }
    else if (computer == "paper") {
        computer_paper();
        win("scissors", computer);
    }
    else {
        computer_scissors();
        tie();
    }
    score();
};