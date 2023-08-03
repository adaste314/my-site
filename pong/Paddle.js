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
        ctx.fillStyle = this.c;
        ctx.strokeStyle = "black";

        ctx.fillRect(this.x, this.y, this.w, this.l);
        ctx.strokeRect(this.x, this.y, this.w, this.l);
    }

    move() {
        let newY = this.y + this.vy;

        if (newY < 0) return;
        if (newY + this.l > boardHeight) return;

        this.y = newY;
    }

    moveCPU(ball) {
        const hardmode = document.getElementById("hardmode");
        
        if (!hardmode.checked) {
            this.vy = Math.max(-1, Math.min(ball.vy, 1));
        }

        if (hardmode.checked) {
            this.vy = Math.max(-3, Math.min(ball.vy, 3));
        }
        this.move();
    }
}
