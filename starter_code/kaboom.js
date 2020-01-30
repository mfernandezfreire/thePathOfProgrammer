class Kaboom {
    constructor(ctx, posX, posY) {
        this.ctx = ctx;
        this.width = 350;
        this.height = 350;
        this.posX = posX;
        this.posY = posY;

        this.image = new Image();
        this.image.src = "./images/boom.png";
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};