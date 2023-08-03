const UPARROW = 38;
const DOWNARROW = 40;
const WKEY = 87;
const SKEY = 83;
const GKEY = 71;
let paddleVelocity = 5;

window.addEventListener("keydown", keyDown);
function keyDown(event) {
    const key = event.keyCode;
    console.log(`KEYDOWN: ${key}`);
    
    switch (key) {
        case (UPARROW):
            paddleR.vy = -paddleVelocity;
            break;
        case (DOWNARROW):
            paddleR.vy = paddleVelocity;
            break;
        case (WKEY):
            paddleL.vy = -paddleVelocity;
            break;
        case (SKEY):
            paddleL.vy = paddleVelocity;
            break;
        default:
    }
}

window.addEventListener("keyup", keyUp);
function keyUp(event) {
    const key = event.keyCode;
    console.log(`KEYUP:   ${key}`);
    
    switch (key) {
        case (UPARROW):
        case (DOWNARROW):
            paddleR.vy = 0;
            break;
        case (WKEY):
        case (SKEY):
            paddleL.vy = 0;
            break;
        case(GKEY):
            if (ball.vx && ball.vy) break;
            let signx = Math.random() * 3 - 1.5;
            while (signx < 1 && signx > -1) signx = Math.random() * 3 - 1.5;
        
            let signy = Math.random() * 3 - 1.5;
            while (signy < 1 && signx > -1) signy = Math.random() * 3 - 1.5;
        
            ball.vx = 2*signx;
            ball.vy = -3*signy;
        default:
    }
}