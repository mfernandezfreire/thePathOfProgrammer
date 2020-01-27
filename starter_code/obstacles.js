class Obstacle {
        constructor(ctx, posX) {
            this.ctx = ctx;
            this.width = 100;
            this.height = 100;
            this.posX = posX;
            this.posY = 0;

            this.velY = 10;
        
            this.image = new Image();
            this.image.src = "./images/pixel-art-freelancer-85473303.jpg";
        }
        draw(){ 
            this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        }

        move() {
            this.posY += this.velY;
        }
}