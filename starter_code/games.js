/** @type HTMLCanvasElement */
/** @type CanvasRenderingContext2D */

const game = {
    canvas: undefined,
    ctx: undefined,
    framesCounter: 0,
    knowledge: 0,
    resilience: 500,
    code: [],
    lessFrustration: [],
    

    init(){
        this.canvas = document.getElementById("canvas")
        this.ctx = canvas.getContext("2d");
        this.setDimensions();
        this.start();
    },

    start() {
        this.reset();
        this.setInterval = setInterval(() => {
        if (this.framesCounter > 5000){
            this.framesCounter = 0;
        }
        this.framesCounter++;
        this.drawAll();
        this.moveAll();
        this.generateCode();
        this.clearCode();
        this.generateLessFrustration();
        this.isCodeCollision();
        this.isCodeLose();
        this.isFrustrationCollision();
        }, 1000 / 60);
        
    },

    setDimensions (){
        this.canvas.setAttribute("height", 900);
        this.canvas.setAttribute("width", 1000);
    },

    reset(){
        this.background = new Background(this.ctx);
        this.knowledgeboard = new Knowledgeboard(this.ctx);
        this.resilienceboard = new Resilienceboard(this.ctx);
        this.player = new Player(this.ctx);
        this.code = [];
    },

    clear() {
        this.ctx.clearRect(0, 0, this.lineWidth, this.height);
    },

    drawAll(){
        this.background.draw();
        this.knowledgeboard.draw(this.knowledge);
        this.resilienceboard.draw(this.resilience)
        this.player.draw();
        this.code.forEach(code => code.draw());
        this.lessFrustration.forEach(frus => frus.draw());
    },

    moveAll(){
        this.player.move();
        this.code.forEach(code => code.move());
        this.lessFrustration.forEach(frus => frus.move());
    },

    generateCode(){
        if(this.framesCounter % 150 == 0){
            this.code.push(new Code(this.ctx, Math.floor(Math.random()*901)));
            console.log(this.code);
        }
    },

    generateLessFrustration() {
        if(this.framesCounter % 170  == 0){
            this.lessFrustration.push(new Lessfrustration(this.ctx, Math.floor(Math.random()*901)));
        }

    },

    isCodeCollision() {
        return this.code.some(obs => {
          if (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY ) {
            this.knowledge += 0.5;
            
          } 
        }
          );
  
      },

      isCodeLose() {
          return this.code.forEach (obs => {
            if(obs.posY > 800){
                this.resilience -= 1;
                console.log(this.resilience)
                this.flames = new Flames(this.ctx, obs.posX);
                this.flames.draw();
            }
          });
      },

    isFrustrationCollision() {
        return this.lessFrustration.some(obs => {
          if (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY ) {
            this.resilience += 1;
          } 
        }
          );
      },



    clearCode() {
        this.code = this.code.filter(obs => obs.posY < 825);
        this.lessFrustration = this.lessFrustration.filter(frus => frus.posY < 825);
    }

   
};