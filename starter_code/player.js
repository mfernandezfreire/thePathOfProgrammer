class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
        this.posX = 450;
        this.posY = 750;

        this.RIGHT = 39,
        this.LEFT = 37,  
        this.JUMP =32,   

        this.image = new Image();
        this.image.src = "./images/pixel-art-freelancer-85473303.jpg";
    }
    draw(){ 
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
    move(){
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.RIGTH:
                // this.posX += 5;
                console.log("right")
                break;
                // case this.LEFT:
                // this.posX -= 5;
                // break;
            }
        });
}
}