
let score1 = 0;
let score2 = 0;

const ALERT_MESSAGES = {
    homeWin: "Home team wins!",
    guestWin: "Guest team wins!",
    tie: "It's a tie!"
};

let homeScore = document.getElementById("homescore");
let guestScore = document.getElementById("guestscore");
let resetBtn = document.getElementById("reset");
let endmatch = document.getElementById("endmatch");

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

function reset() {
    score1 = 0;
    score2 = 0;
    homeScore.textContent = score1;
    guestScore.textContent = score2;
}

resetBtn.addEventListener("click", reset);

endmatch.addEventListener("click", function endMatch() {
    if (score1 > score2) {
        alert(ALERT_MESSAGES.homeWin);
    } else if (score2 > score1) {
        alert(ALERT_MESSAGES.guestWin);
    } else {
        alert(ALERT_MESSAGES.tie);
    }
    console.log(alert);
});