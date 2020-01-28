class Code {
    constructor(ctx, posX) {
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
        this.posX = posX;
        this.posY = 0;

        this.image = new Image();
        this.image.src = "./images/html5.png";
        this.velY = Math.floor(Math.random() * 6) + 1;
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    move() {
        this.posY += this.velY;
    }
}