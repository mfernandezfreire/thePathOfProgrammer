class Flames {
    constructor(ctx, posX) {
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
        this.posX = posX;
        this.posY = 800;

        this.image = new Image();
        this.image.src = "./images/PixelArt copia.png";
    }
    draw(){ 
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
};