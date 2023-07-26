const guess = document.getElementById("guess");
const report = document.getElementById("report");
const body = document.body;

const MAXNUM = 100;
let secret;

function loadGame() {
    guess.max = MAXNUM;
    secret = Math.floor(Math.random() * (MAXNUM + 1));
}

function makeGuess() {
    let myGuess = guess.value;
    
    if (myGuess > secret) {
        report.innerHTML += `<br/>${myGuess} is too high`;
    }

    else if (myGuess < secret) {
        report.innerHTML += `<br/>${myGuess} is too low`;
    }
    
    else {
        report.innerHTML += `<br/>${myGuess} is the answer :}`; 
        body.style.backgroundRepeat = `repeat-x`;
        body.style.backgroundImage = `linear-gradient(gold, black)`;
    }

}