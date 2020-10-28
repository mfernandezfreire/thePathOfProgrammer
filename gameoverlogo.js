class Gameoverlogo {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 1050;
        this.height = 900;
        this.posX = -10;
        this.posY = 0;

        this.image = new Image();
        this.image.src = "./images/GameOverLog.png";
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
}