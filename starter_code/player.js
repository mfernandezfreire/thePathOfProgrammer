class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
        this.posX = 450;
        this.posY = 650;
    

        this.image = new Image();
        this.image.src = "./images/Brain.png";
    }
    draw(){ 
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    move(){
        window.onkeydown =  (e) =>{
            if (e.keyCode === 39 ) {
            this.posX += 20;
            }
            if (e.keyCode === 37) {
               this.posX -= 20;
            } 
            if (e.keyCode === 38) {
                this.posY -= 20;
             } 
             if (e.keyCode === 40) {
                this.posY += 20;
             } 
    };
}
}