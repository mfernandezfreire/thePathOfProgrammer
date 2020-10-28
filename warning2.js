class Warning2 {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 500;
        this.height = 250;
        this.posX = 850;
        this.posY = 150;

        this.image = new Image();
        this.image.src = "./images/warning2.png";
        this.velX = 1;
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    move() {
       this.posX -= this.velX;
}
}