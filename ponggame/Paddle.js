class Paddle {
    constructor(x, y, l, w, c) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.l = l;
        this.w = w;
        this.c = c;
    }

    draw(ctx) {
        // CODE HERE
    }

    move() {
        // CODE HERE
    }

    moveCPU(ball) {
        // Use the properties of the ball to set a new velocity
        // Helpful pieces:
        //   Math.min() and Math.max() to limit the velocity
        //   ball.y to see where the ball is
        //   ball.vy to see where the ball is going

        this.vy = 0; // Modify this line to add your own code

        // Finally, call move to move the paddle normally
        this.move();
    }
}