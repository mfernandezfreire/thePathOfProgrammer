class Resilence {
    constructor(ctx, posX, posY) {
        this.ctx = ctx;
        this.width = 150;
        this.height = 150;
        this.posX = posX;
        this.posY = posY;

        this.image = new Image();
        this.image.src = "./images/resilence++.png";
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};