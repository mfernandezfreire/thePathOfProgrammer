class Lessfrustration {
    constructor(ctx, posX) {
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
        this.posX = posX;
        this.posY = 0;

        this.velY = 5;

        this.imageSource = ["./images/kisspng-pizza-hut-pixel-art-pizzaria-heart-pizza-5b46df4de0aca3.0224434515313713419203.png","./images/coffee-transparent-tumblr-17.png","./images/PikPng.com_google-logo-png_607449.png","./images/PixelArt.png"]
        
        this.image = new Image();
        this.image.src = this.imageSource[Math.floor(Math.random()*4)];

    }

    draw(){ 
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

        move() {
            this.posY += this.velY;
        }
}