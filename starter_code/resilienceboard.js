class Resilienceboard {
    constructor(ctx) {
        this.ctx = ctx;
        this.ctx.font = "20px courier new";
  
        this.image = new Image();
        this.image.src = "./images/PixelArt.png";
    }
    draw(score) { 
          this.ctx.beginPath();
          this.ctx.fillStyle = "black";
          this.ctx.fillText(`${score}` + " / 500" + " Look your resilience level", 15, 90);
          this.ctx.rect(0, 100, score, 25);
          this.ctx.fillStyle = "#e5007e";
          this.ctx.fill();
          this.ctx.stroke();
          this.ctx.drawImage(this.image, score, 100, 25, 25);
      }
  }