class Boom {
    constructor(ctx, posX, posY) {
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
        this.posX = posX;
        this.posY = posY;

        this.image = new Image();
        this.image.src = "./images/boom.png";
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};