class Code2 {
    constructor(ctx, posX) {
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
        this.posX = posX;
        this.posY = 0;

        this.velY = Math.floor(Math.random() * 6) + 1;

        this.imageSource = ["./images/html5.png","./images/css.png","./images/js.png","./images/nodejs.png","./images/js.png"];

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