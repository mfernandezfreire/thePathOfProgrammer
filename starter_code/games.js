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


    init() {
        this.canvas = document.getElementById("canvas")
        this.ctx = canvas.getContext("2d");
        this.setDimensions();
        this.start();
    },

    start() {
        this.reset();
        this.setInterval = setInterval(() => {
            if (this.framesCounter > 5000) {
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
            this.isLessFrustration();
            this.isFrustrationCollision();
            if (this.resilience <= 0) {
                this.gameOver();
            }
            if (this.knowledge > 500){
                this.nextLevel();
            }

        }, 1000 / 60);

    },

    setDimensions() {
        this.canvas.setAttribute("height", 900);
        this.canvas.setAttribute("width", 1000);
    },

    reset() {
        this.background = new Background(this.ctx);
        this.knowledgeboard = new Knowledgeboard(this.ctx);
        this.resilienceboard = new Resilienceboard(this.ctx);
        this.player = new Player(this.ctx);
        this.code = [];
        this.gameoverlogo = new Gameoverlogo(this.ctx);
        this.nextlevellogo = new Nextlevellogo(this.ctx);
    },

    clear() {
        this.ctx.clearRect(0, 0, this.lineWidth, this.height);
    },

    drawAll() {
        this.background.draw();
        this.knowledgeboard.draw(this.knowledge);
        this.resilienceboard.draw(this.resilience)
        this.player.draw();
        this.code.forEach(code => code.draw());
        this.lessFrustration.forEach(frus => frus.draw());
    },

    moveAll() {
        this.player.move();
        this.code.forEach(code => code.move());
        this.lessFrustration.forEach(frus => frus.move());
    },

    generateCode() {
        if (this.framesCounter % 120 == 0) {
            this.code.push(new Code(this.ctx, Math.floor(Math.random() * 901)));
        }
    },

    generateLessFrustration() {
        if (this.framesCounter % 170 == 0) {
            this.lessFrustration.push(new Lessfrustration(this.ctx, Math.floor(Math.random() * 901)));
        }

    },

    isCodeCollision() {
        return this.code.some(obs => {
            if (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY) {
                if(this.knowledge < 500){
                  this.knowledge += 30;
                };
                let posX = obs.posX;
                let posY = obs.posY;
                this.code = this.code.filter(obs => obs.posX !== posX && obs.posY !== posY);
                console.log(posX)
                console.log(posY)
            }
        });

    },

    isCodeLose() {
        return this.code.forEach(obs => {
            if (obs.posY > 800) {
                this.resilience -= 15;
                this.flames = new Flames(this.ctx, obs.posX);
                this.flames.draw();
            }
        });
    },
    isLessFrustration() {
        return this.lessFrustration.forEach(obs => {
            if (obs.posY > 800) {
                this.resilience -= 15;
                this.flames = new Poof(this.ctx, obs.posX);
                this.flames.draw();
            }
        });
    },

    isFrustrationCollision() {
        return this.lessFrustration.some(obs => {
            if (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY) {
                if (this.resilience < 500) {
                this.resilience += 30;
                }
                let posX = obs.posX;
                let posY = obs.posY;
                this.lessFrustration = this.lessFrustration.filter(obs => obs.posX !== posX && obs.posY !== posY);
            }
        });
    },

    clearCode() {
        this.code = this.code.filter(obs => obs.posY < 825);
        this.lessFrustration = this.lessFrustration.filter(frus => frus.posY < 825);
    },

    gameOver() {
        clearInterval(this.setInterval);
        this.gameoverlogo.draw();
    },
    nextLevel() {
        clearInterval(this.setInterval);
        this.nextlevellogo.draw();
    }


};