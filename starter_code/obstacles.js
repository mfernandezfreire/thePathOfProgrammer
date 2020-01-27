class Obstacle {
        constructor(ctx) {
            this.ctx = ctx;
            this.width = 100;
            this.height = 100;
            this.posX = 200;
            this.posY = 300;
        
            this.image = new Image();
            this.image.src = "./images/pixel-art-freelancer-85473303.jpg";
        }
        draw(){ 
            this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        }
}