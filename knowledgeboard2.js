class Knowledgeboard2 {
    constructor(ctx) {
      this.ctx = ctx;
      this.ctx.font = "20px 'Press Start 2P'";
  
      this.image = new Image();
      this.image.src = "./images/html5.png";
    }
    draw(score) {
      this.ctx.beginPath();
      this.ctx.fillStyle = "black";
      this.ctx.fillText("KNOWLEDGEBAR: " + `${score}` + " / 500", 5, 130);
      this.ctx.rect(0, 140, score, 40);
      this.ctx.fillStyle = "green";
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.drawImage(this.image, score, 130, 60, 60);
    }
  }