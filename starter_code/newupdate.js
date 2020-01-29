class Newupdate {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 350;
        this.height = 350;
        this.posX = 850;
        this.posY = 550;

        this.image = new Image();
        this.image.src = "./images/newhtml.png";
        this.velX = 1;
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    move() {
       this.posX -= this.velX;

       if (this.posX <= 0){
           this.velX = -(this.velX);
       }
}
}
