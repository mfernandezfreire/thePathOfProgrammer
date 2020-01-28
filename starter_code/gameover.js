class gameover {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 1000;
        this.height = 900;
        this.posX = 0;
        this.posY = 0;

        this.image = new Image();
        this.image.src = "./images/GameOver1-1.png";
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
}