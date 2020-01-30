class Warning {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 200;
        this.height = 200;
        this.posX = 850;
        this.posY = 100;

        this.image = new Image();
        this.image.src = "./images/newhtml.png";
        this.velX = 1;
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    move() {
       this.posX -= this.velX;
}
}