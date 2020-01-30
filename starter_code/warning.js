class Warning {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 350;
        this.height = 250;
        this.posX = 850;
        this.posY = 150;

        this.image = new Image();
        this.image.src = "./images/Warning.png";
        this.velX = 1;
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    move() {
       this.posX -= this.velX;
}
}