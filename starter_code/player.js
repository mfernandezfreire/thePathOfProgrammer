class Player {
    constructor(ctx, keys, knowledge, resilience) {
        this.ctx = ctx;
        this.width = 100 + knowledge*0.3;
        this.height = 100 + knowledge*0.3;
        this.posX = 450;
        this.posY = 650;
        this.vel = -20 + knowledge*0.01 - resilience*0.01;
        this.brainDimensions = {
            w: this.width ,
            h: this.height ,
        }


        this.image = new Image();
        this.image.src = "./images/Brain.png";

        this.keys = keys;

        this.setListeners();

        gsap.to(this.brainDimensions, 1.25, {
            yoyo: 1,
            repeat: -1,
            w: this.width * .85,
            h: this.height * .8522
        })
    }

    

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.brainDimensions.w, this.brainDimensions.h);
    }


    setListeners() {
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.RIGTH:
                    if (this.posX < 800) {
                        this.posX = this.posX - this.vel;
                    }
                    break;
                case this.keys.LEFT:
                    if (this.posX > 100) {
                        this.posX = this.posX + this.vel;
                    }
                    break;
                case this.keys.UP:
                    if (this.posY > 200) {
                        this.posY = this.posY + this.vel;
                    }
                    break;
                case this.keys.DOWN:
                    if (this.posY < 700) {
                        this.posY = this.posY - this.vel;
                    }
                    break;
            }

        });
    }
    // window.onkeydown = (e) => {
    //     if (e.keyCode === 39) {
    //         this.posX += 20;
    //     }
    //     if (e.keyCode === 37) {
    //         this.posX -= 20;
    //     }
    //     if (e.keyCode === 38) {
    //         this.posY -= 20;
    //     }
    //     if (e.keyCode === 40) {
    //         this.posY += 20;
    //     }
    // };
}