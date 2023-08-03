const gameboard = document.getElementById("gameboard");
const reset = document.getElementById("reset");
const cpucheck = document.getElementById("cpucheck");
const hardmode = document.getElementById("hardmode");
const ctx = gameboard.getContext("2d");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");


let boardWidth = 500;
let boardHeight = 500;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.15; // >= 1.0
let paddleWidth = 25;
let paddleLength = 100;
let ballRadius = 7.5;

let ball;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;
let powerL = false;
let powerR = false;

function resetGame() {
    reset.innerHTML = `RESET`;
    
    clearInterval(intervalID); // clear the clock
    gameboard.width = boardWidth;
    gameboard.height = boardHeight;
    
    p1.style.display = `none`;
    p2.style.display = `none`;

    scoreL = 0;
    scoreR = 0;
    updateScore();
    resetBall();
    resetPaddles();

    nextTick(); // start running the clock
}

function resetPaddles() {
    paddleL = new Paddle(paddleWidth / 2, 0, paddleLength, paddleWidth / 2, "red");
    paddleR = new Paddle(boardWidth-paddleWidth, 0, paddleLength, paddleWidth / 2, "blue");
}

function resetBall() {
    ball = new Ball(boardWidth/2, boardHeight/2, 0, 0, ballRadius, "green");
    ctx.clearRect(0, 0, boardWidth, boardHeight);
}

function clearBoard() {
    ctx.clearRect(0, 0, paddleWidth + 1, boardHeight);
    ctx.clearRect(boardWidth - paddleWidth - 1, 0, boardWidth, boardHeight);
    ctx.fillStyle = `rgb(0, 0, 0, 0)`;
    ctx.fillRect(0, 0, boardWidth, boardHeight);
}

function draw() {
    clearBoard();
    
    ball.draw(ctx);
    paddleL.draw(ctx); paddleR.draw(ctx);
}

let intervalID;

function nextTick() {
    intervalID = setTimeout(
        () => {
            
            paddleL.move();
            var x = cpucheck.getAttribute("checked");
            if (cpucheck.checked) {
                paddleR.moveCPU(ball);
            } else {
                paddleR.move();
            }

            ball.bounceWall();
            if (ball.bouncePaddleL(paddleL)) score("right");
            if (ball.bouncePaddleR(paddleR)) score("left");
            
            ball.move();

            draw();
            nextTick();

           
        }, 10
    );
}

function checkboxChanged() {
    if (cpucheck.checked) {
        hardmode.disabled = false;
    } else {
        hardmode.disabled = true;
        hardmode.checked = false;
    }
}

function score(player) {
    if (player == "left") scoreL++;
    else if (player == "right") scoreR++;
    updateScore();

    if (Math.abs(scoreL - scoreR) >= 6) {
        if (paddleL.l < paddleLength*2 && paddleR.l < paddleLength*2) {
            if (scoreL > scoreR) paddleR.l *= 2;
            else paddleL.l *= 2;
        }
    }

    else if (scoreL == scoreR) {paddleL.l = paddleLength; paddleR.l = paddleLength}

    if (scoreL >= 18) {
        p1.style.display = `block`;
        window.removeEventListener("keydown");
        window.removeEventListener("keyup");
    } 

    else if (scoreR >= 18) {
        p2.style.display = `block`;
        window.removeEventListener("keydown");
        window.removeEventListener("keyup");
    } 
    

    resetBall();
}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreL} : ${scoreR}`;
}
