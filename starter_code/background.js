class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 1000;
        this.height = 900;
        this.posX = 0;
        this.posY = 0;

        this.image = new Image();
        this.image.src = "./images/90s_programmer_room__link_in_description__by_mattartistjeevas_dccrk3v-pre_2.jpg";
    }
    draw(){ 
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
};