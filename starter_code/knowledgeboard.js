class Knowledgeboard {
  constructor(ctx) {
      this.ctx = ctx;
      this.ctx.font = "20px courier new";

      this.image = new Image();
      this.image.src = "./images/html5.png";
  }
  draw(score) { 
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.fillText(`${score}` + " / 500" + "HTML 5.0 Kwoledgebar", 15, 25);
        this.ctx.rect(0, 35, score, 25);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.drawImage(this.image, score, 33, 30, 30);
    }
}