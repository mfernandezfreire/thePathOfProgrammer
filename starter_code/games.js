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
    newupdate: [],
    warning: [],
    keys: {
        RIGTH: 39,
        LEFT: 37,
        UP: 38,
        DOWN: 40
    },


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
            this.clear();
            this.generateLessFrustration();
            this.generateNewUpdate();
            this.generateWarning();
            this.isupdateplayercollision();
            this.isWarningAdvice();
            this.isCodeCollision();
            this.isCodeLose();
            this.isLessFrustration();
            this.isFrustrationCollision();
            if (this.resilience <= 0) {
                this.gameOver();
            }
            if (this.knowledge > 500) {
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
        this.player = new Player(this.ctx, this.keys);
        this.code = [];
        this.newupdate = [];
        this.warning = [];
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
        this.newupdate.forEach(upd => upd.draw());
        this.warning.forEach(upd => upd.draw());

    },

    moveAll() {
        this.code.forEach(code => code.move());
        this.lessFrustration.forEach(frus => frus.move());
        this.newupdate.forEach(upd => upd.move());
        this.warning.forEach(upd => upd.move());

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


    generateNewUpdate() {
        if (this.framesCounter % 2000 == 0) {
            this.newupdate.push(new Newupdate(this.ctx));
        }
    },
    generateWarning(){
        if (this.framesCounter % 1800 == 0) {
            this.warning.push(new Warning(this.ctx));
            console.log(this.warning);
        }
    },

    isWarningAdvice() {
        return this.newupdate.some(obs => {
            if (this.background.posX + this.background.width > obs.posX && obs.posX + obs.width > this.background.posX && this.background.posY + this.background.height > obs.posY && obs.posY + obs.height > this.background.posY) {
                this.warning = [];
            }
        });

    },

    isCodeCollision() {
        return this.code.some(obs => {
            if (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY) {
                if (this.knowledge < 500) {
                    this.knowledge += 2;
                    console.log(this.knowledge)
                };

                let posX = obs.posX;
                let posY = obs.posY;

                this.boom = new Boom(this.ctx, posX, posY);
                console.log(this.boom);
                this.boom.draw();


                setTimeout(() => {
                    this.code = this.code.filter(obs => obs.posX !== posX && obs.posY !== posY);
                }, 100);
            }
        });

    },


    isupdateplayercollision() {
        return this.newupdate.some(obs => {
            if (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY) {
                if (this.knowledge < 500) {
                    this.knowledge -= 2;
                    console.log(this.knowledge);
                };

                let posX = obs.posX;
                let posY = obs.posY;

                this.boom = new Boom(this.ctx, posX, posY);
                console.log(this.boom);
                this.boom.draw();


                setTimeout(() => {
                    this.newupdate = this.newupdate.filter(obs => obs.posX !== posX && obs.posY !== posY);
                    console.log(posX)
                    console.log(posY)
                }, 100);
            }
        });

    },

    isCodeLose() {
        return this.code.forEach(obs => {
            if (obs.posY > 800) {
                this.resilience -= 10;
                this.flames = new Flames(this.ctx, obs.posX);
                this.flames.draw();
            }
        });
    },
    isLessFrustration() {
        return this.lessFrustration.forEach(obs => {
            if (obs.posY > 800) {
                this.flames = new Poof(this.ctx, obs.posX);
                this.flames.draw();
            }
        });
    },

    isFrustrationCollision() {
        return this.lessFrustration.some(obs => {
            if (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY) {
                if (this.resilience < 500) {
                    this.resilience += 10;
                }
                let posX = obs.posX;
                let posY = obs.posY;

                this.boom = new Resilence(this.ctx, posX, posY);
                console.log(this.resilence);
                this.boom.draw();


                setTimeout(() => {
                    this.lessFrustration = this.lessFrustration.filter(obs => obs.posX !== posX && obs.posY !== posY);
                    console.log(posX)
                    console.log(posY)
                }, 300);
            }
        });
    },

    clear() {
        this.code = this.code.filter(obs => obs.posY < 825);
        this.lessFrustration = this.lessFrustration.filter(frus => frus.posY < 825);
        // this.newupdate = this.newupdate.filter(upd => upd.posX < 1100);

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