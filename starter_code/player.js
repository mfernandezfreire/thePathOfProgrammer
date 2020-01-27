class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
        this.posX = 500;
        this.posY = 750;
    

        this.image = new Image();
        this.image.src = "./images/Brain.png";
    }
    draw(){ 
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    move(){
        window.onkeydown =  (e) =>{
            if (e.keyCode === 39 ) {
            this.posX += 10;
            }
            if (e.keyCode === 37) {
               this.posX -= 10;
            } 
            if (e.keyCode === 38) {
                this.posY -= 10;
             } 
             if (e.keyCode === 40) {
                this.posY += 10;
             } 
        };
    }
}