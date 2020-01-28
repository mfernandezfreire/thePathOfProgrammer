const scoreboard = {
    ctx: undefined,
  
    init(ctx) {
      this.ctx = ctx;
      this.ctx.font = "30px sans-serif";
    },
  
    update(score) {
      this.ctx.fillStyle = "green";
      console.log(Math.floor(score), "--------------");
      this.ctx.fillText(Math.floor(score), 50, 50);
    }
  };