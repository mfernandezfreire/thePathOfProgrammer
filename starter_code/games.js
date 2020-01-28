/** @type HTMLCanvasElement */
/** @type CanvasRenderingContext2D */

const game = {
    canvas: undefined,
    ctx: undefined,
    framesCounter: 0,
    code: [],
    lessFrustation: [],
    

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
        // console.log(this.framesCounter);
        this.clear();
        this.drawAll();
        this.moveAll();
        this.generateCode();
        this.generateLessFrustration();
        }, 1000 / 60);
        
    },

    setDimensions (){
        this.canvas.setAttribute("height", 900);
        this.canvas.setAttribute("width", 1000);
    },

    reset(){
        this.background = new Background(this.ctx);
        this.player = new Player(this.ctx);
        this.code = [];
    },

    clear() {
        this.ctx.clearRect(0, 0, this.lineWidth, this.height);
    },

    drawAll(){
        this.background.draw();
        this.player.draw();
        this.code.forEach(code => code.draw());
        this.lessFrustation.forEach(frus => frus.draw());
    },

    moveAll(){
        this.player.move();
        this.code.forEach(code => code.move());
        this.lessFrustation.forEach(frus => frus.move());
    },

    generateCode(){
        if(this.framesCounter % 150 == 0){
            this.code.push(new Code(this.ctx, Math.floor(Math.random()*1000)));
            console.log(this.code);
        }
    },

    generateLessFrustration() {
        if(this.framesCounter % 170  == 0){
            this.lessFrustation.push(new Lessfrustration(this.ctx, Math.floor(Math.random()*1000)));
        }

    }

   
};