/** @type HTMLCanvasElement */
/** @type CanvasRenderingContext2D */

const game = {
    canvas: undefined,
    ctx: undefined,
    framesCounter: 0,
    obstacles: [],
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
        this.clear();
        this.drawAll();
        this.moveAll();
        this.generateObtacles();
        this.clearObstacles();
        }, 1000 / 60);
    },

    setDimensions (){
        this.canvas.setAttribute("height", 900);
        this.canvas.setAttribute("width", 1000);
    },

    reset(){
        this.background = new Background(this.ctx);
        this.player = new Player(this.ctx);
        this.obstacle = [];
    },

    clear() {
        this.ctx.clearRect(0, 0, this.lineWidth, this.height);
    },

    drawAll(){
        this.background.draw();
        this.player.draw();
        this.obstacles.forEach(obs => obs.draw());

    },

    moveAll(){
        this.player.move();
        this.obstacles.forEach(obs => obs.move);
    },

    generateObtacles(){
        if(this.framesCounter % 90 == 0){
            this.obstacles.push(this.ctx, new Obstacle(Math.floor(Math.random()*601)));
            console.log(this.obstacles);
        }
    },

    clearObstacles(){
        this.obstacles = this.obstacles.filter(obs => obs.posy >= 600);
        }
};