class Obstacle {
        constructor(ctx) {
            this.ctx = ctx;
            this.width = 100;
            this.height = 100;
            this.posX = 350;
            this.posY = 350;

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