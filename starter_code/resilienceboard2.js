class Resilienceboard2 {
    constructor(ctx) {
        this.ctx = ctx;
        this.ctx.font = "20px 'Press Start 2P'";

        this.image = new Image();
        this.image.src = "./images/resilience.png";
    }
    draw(score) {
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.fillText("RESILIENCEBAR:" + " " + `${score}` + " / 500", 5, 40);
        this.ctx.rect(0, 50, score, 40);
        this.ctx.fillStyle = "#e5007e";
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.drawImage(this.image, score, 30, 75, 75);
    }
}