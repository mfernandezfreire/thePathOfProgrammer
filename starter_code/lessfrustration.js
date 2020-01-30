class Lessfrustration {
    constructor(ctx, posX) {
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
        this.posX = posX;
        this.posY = 0;

        this.velY = Math.floor(Math.random() * 6) + 1;

        this.imageSource = ["./images/kisspng-pizza-hut-pixel-art-pizzaria-heart-pizza-5b46df4de0aca3.0224434515313713419203.png", "./images/teacup.png", "./images/PixelArt.png", "./images/kisspng-pizza-hut-pixel-art-pizzaria-heart-pizza-5b46df4de0aca3.0224434515313713419203.png",];

        this.image = new Image();
        this.image.src = this.imageSource[Math.floor(Math.random() * 4)];

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    move() {
        this.posY += this.velY;
    }
}