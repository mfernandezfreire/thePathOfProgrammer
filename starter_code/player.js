class Player {
    constructor(ctx, keys) {
        this.ctx = ctx;
        this.width = 100;
        this.height = 100;
        this.posX = 450;
        this.posY = 650;


        this.image = new Image();
        this.image.src = "./images/Brain.png";

        this.keys = keys;

        this.setListeners();
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    setListeners() {
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.RIGTH:
                    if (this.posX < 800) {
                        this.posX += 20;
                    }
                    break;
                case this.keys.LEFT:
                    if (this.posX > 100) {
                        this.posX -= 20;
                    }
                    break;
                case this.keys.UP:
                    if (this.posY > 300) {
                        this.posY -= 20;
                    }
                    break;
                case this.keys.DOWN:
                    if (this.posY < 700) {
                        this.posY += 20;
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