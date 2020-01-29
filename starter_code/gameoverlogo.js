class gameover {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 200;
        this.height = 300;
        this.posX = 0;
        this.posY = 0;

        this.image = new Image();
        this.image.src = "./images/GameOverLogo.png";
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
}