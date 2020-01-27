/** @type HTMLCanvasElement */
/** @type CanvasRenderingContext2D */

const game = {
    canvas: undefined,
    ctx: undefined,
    init(){
        this.canvas = document.getElementById("canvas")
        this.ctx = canvas.getContext("2d");
        this.setDimensions();
        this.start();
    },

    start() {
        this.reset();
        this.setInterval = setInterval(() => {
        this.setDimensions();
        this.drawAll();
        this.moveAll();
        }, 1000 / 60);
    },

    setDimensions (){
        this.canvas.setAttribute("height", 900);
        this.canvas.setAttribute("width", 1000);
    },

    reset(){
        this.background = new Background(this.ctx);
        this.player = new Player(this.ctx);
        this.obstacle = new Obstacle(this.ctx);
    },

    drawAll(){
        this.background.draw();
        this.player.draw();
        // this.obstable.draw();

    },

    moveAll(){
        this.player.move();
    },


    
    // Create Obstacles
    // drawObstacles
};