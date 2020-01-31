class Newupdate2 {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 350;
        this.height = 350;
        this.posX = 1700;
        this.posY = 520;

        this.image = new Image();
        this.image.src = "./images/codechallege.png";
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
