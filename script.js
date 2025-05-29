
let score1 = 0;
let score2 = 0;

let homeScore = document.getElementById("homescore");
let guestScore = document.getElementById("guestscore");
let resetButton = document.getElementById("reset");

document.getElementById("home1").addEventListener("click", function homescore1() {
    score1 += 1;
    homeScore.textContent = score1;
});

document.getElementById("home2").addEventListener("click", function homescore2() {
    score1 += 2;
    homeScore.textContent = score1;
});
document.getElementById("home3").addEventListener("click", function homescore3() {
    score1 += 3;
    homeScore.textContent = score1;
});
document.getElementById("guest1").addEventListener("click", function guestscore1() {
    score2 += 1;
    guestScore.textContent = score2;
});
document.getElementById("guest2").addEventListener("click", function guestscore2() {
    score2 += 2;
    guestScore.textContent = score2;
});
document.getElementById("guest3").addEventListener("click", function guesscoret3() {
    score2 += 3;
    guestScore.textContent = score2;
});

resetButton.addEventListener("click", function reset() {
    score1 = 0;
    score2 = 0;
    homeScore.textContent = score1;
    guestScore.textContent = score2;
});