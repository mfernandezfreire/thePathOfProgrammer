/** @type HTMLCanvasElement */
/** @type CanvasRenderingContext2D */

const game = {
    canvas: undefined,
    ctx: undefined,
    framesCounter: 0,
    knowledge: 490,
    resilience: 500,
    code: [],
    code2: [],
    lessFrustration: [],
    newupdate: [],
    newupdate2: [],
    warning: [],
    warning2: [],
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

    init2() {
        this.canvas = document.getElementById("canvas")
        this.ctx = canvas.getContext("2d");
        this.setDimensions();
        this.start2();
        
    },

    start() {
        this.reset();
        this.setInterval = setInterval(() => {
            if (this.framesCounter > 5000) {
                this.framesCounter = 0;
            }
            this.soundGamePlay.play();
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

    start2() {
        this.reset();
        this.setInterval = setInterval(() => {
            if (this.framesCounter > 5000) {
                this.framesCounter = 0;
            }
            this.soundGamePlay.play();
            this.framesCounter++;
            this.drawAll2();
            this.moveAll2();
            this.generateCode2();
            this.clear2();
            this.generateLessFrustration();
            this.generateNewUpdate2();
            this.generateWarning2();
            this.isupdateplayercollision2();
            this.isWarningAdvice2();
            this.isCodeCollision2();
            this.isCodeLose2();
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
        this.soundGamePlay = new Sound("./sounds/spanish-flea-8-bit (1).mp3")
        this.soundGotIt = new Sound("./sounds/270303__littlerobotsoundfactory__collect-point-01.wav")
        this.soundBlameIt = new Sound("./sounds/270343__littlerobotsoundfactory__shoot-01.wav")
        this.soundWin = new Sound("./sounds/270333__littlerobotsoundfactory__jingle-win-00.wav")
        this.soundLose = new Sound("./sounds/270329__littlerobotsoundfactory__jingle-lose-00.wav")
        this.soundMenuPick = new Sound("./sounds/270322__littlerobotsoundfactory__menu-navigate-02.wav")
        this.soundMegaLose = new Sound("./sounds/270311__littlerobotsoundfactory__explosion-03.wav")
        this.background = new Background(this.ctx);
        this.background2 = new Background2(this.ctx);
        this.knowledgeboard = new Knowledgeboard(this.ctx);
        this.knowledgeboard2 = new Knowledgeboard2(this.ctx);
        this.resilienceboard = new Resilienceboard(this.ctx);
        this.resilienceboard2 = new Resilienceboard2(this.ctx);
        this.player = new Player(this.ctx, this.keys, this.knowledge, this.resilience);
        this.code = [];
        this.code2 = [];
        this.newupdate = [];
        this.newupdate2 = [];
        this.warning = [];
        this.warning2 = [];
        this.gameoverlogo = new Gameoverlogo(this.ctx);
        this.nextlevellogo = new Nextlevellogo(this.ctx);
    },

    clear() {
        this.ctx.clearRect(0, 0, this.lineWidth, this.height);
    },
    clear2() {
        this.ctx.clearRect(0, 0, this.lineWidth, this.height);
    },

    drawAll() {
        this.background.draw();
        this.knowledgeboard.draw(this.knowledge);
        this.resilienceboard.draw(this.resilience);
        this.player.draw();
        this.code.forEach(code => code.draw());
        this.lessFrustration.forEach(frus => frus.draw());
        this.newupdate.forEach(upd => upd.draw());
        this.warning.forEach(upd => upd.draw());

    },
    drawAll2() {
        this.background2.draw();
        this.knowledgeboard2.draw(this.knowledge);
        this.resilienceboard2.draw(this.resilience)
        this.player.draw();
        this.code2.forEach(code => code.draw());
        this.lessFrustration.forEach(frus => frus.draw());
        this.newupdate2.forEach(upd => upd.draw());
        this.warning2.forEach(upd => upd.draw());

    },

    moveAll() {
        this.code.forEach(code => code.move());
        this.lessFrustration.forEach(frus => frus.move());
        this.newupdate.forEach(upd => upd.move());
        this.warning.forEach(upd => upd.move());

    },

    moveAll2() {
        this.code2.forEach(code => code.move());
        this.lessFrustration.forEach(frus => frus.move());
        this.newupdate2.forEach(upd => upd.move());
        this.warning2.forEach(upd => upd.move());

    },

    generateCode() {
        if (this.framesCounter % 120 == 0) {
            this.code.push(new Code(this.ctx, Math.floor(Math.random() * 901)));
        }
    },
    generateCode2() {
        if (this.framesCounter % 120 == 0) {
            this.code2.push(new Code2(this.ctx, Math.floor(Math.random() * 901)));
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
    generateNewUpdate2() {
        if (this.framesCounter % 2000 == 0) {
            this.newupdate2.push(new Newupdate2(this.ctx));
        }
    },
    generateWarning(){
        if (this.framesCounter % 1800 == 0) {
            this.warning.push(new Warning(this.ctx));
        }
    },
    generateWarning2(){
        if (this.framesCounter % 1800 == 0) {
            this.warning2.push(new Warning2(this.ctx));
        }
    },
    isWarningAdvice() {
        return this.newupdate.some(obs => {
            if (this.background.posX + this.background.width > obs.posX && obs.posX + obs.width > this.background.posX && this.background.posY + this.background.height > obs.posY && obs.posY + obs.height > this.background.posY) {
                this.warning = [];
            }
        });

    },
    isWarningAdvice2() {
        return this.newupdate2.some(obs => {
            if (this.background.posX + this.background.width > obs.posX && obs.posX + obs.width > this.background.posX && this.background.posY + this.background.height > obs.posY && obs.posY + obs.height > this.background.posY) {
                this.warning2 = [];
            }
        });

    },

    isCodeCollision() {
        return this.code.some(obs => {
            if (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY) {
                    this.knowledge += 2;
                

                this.soundGotIt.play();

                let posX = obs.posX;
                let posY = obs.posY;

                this.boom = new Boom(this.ctx, posX, posY);
                this.boom.draw();
                


                setTimeout(() => {
                    this.code = this.code.filter(obs => obs.posX !== posX && obs.posY !== posY);
                }, 100);
            }
        });
    },
        isCodeCollision2() {
            return this.code2.some(obs => {
                if (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY) {
                        this.knowledge += 2;
                    
    
                    this.soundGotIt.play();
    
                    let posX = obs.posX;
                    let posY = obs.posY;
    
                    this.boom = new Boom(this.ctx, posX, posY);
                    this.boom.draw();
    
    
                    setTimeout(() => {
                        this.code2 = this.code2.filter(obs => obs.posX !== posX && obs.posY !== posY);
                    }, 100);
                }
            });

    },


    isupdateplayercollision() {
        return this.newupdate.some(obs => {
            if (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY) {
                if (this.knowledge > 0) {
                    this.knowledge -= 100;
                } else {
                    this.knowledge = 0;
                }

                this.soundMegaLose.play();

                let posX = obs.posX;
                let posY = obs.posY;

                this.kaboom = new Kaboom(this.ctx, posX, posY);
                this.kaboom.draw();


                setTimeout(() => {
                    this.newupdate = this.newupdate.filter(obs => obs.posX !== posX && obs.posY !== posY);
                }, 100);
            }
        });

    },
    isupdateplayercollision2() {
        return this.newupdate2.some(obs => {
            if (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY) {
                if (this.knowledge > 0) {
                    this.knowledge -= 100;
                } else {
                    this.knowledge = 0;
                }

                this.soundMegaLose.play();

                let posX = obs.posX;
                let posY = obs.posY;

                this.kaboom = new Kaboom(this.ctx, posX, posY);
                this.kaboom.draw();


                setTimeout(() => {
                    this.newupdate2 = this.newupdate2.filter(obs => obs.posX !== posX && obs.posY !== posY);
                }, 100);
            }
        });

    },

    isCodeLose() {
        return this.code.forEach(obs => {
            if (obs.posY > 800) {
                this.resilience -= 10;
                this.soundBlameIt.play();
                this.flames = new Flames(this.ctx, obs.posX);
                this.flames.draw();
            }
        });
    },
    isCodeLose2() {
        return this.code2.forEach(obs => {
            if (obs.posY > 800) {
                this.resilience -= 10;
                this.soundBlameIt.play();
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
                this.soundBlameIt.play();
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

                this.soundGotIt.play();
                
                this.boom = new Resilence(this.ctx, posX, posY);
                this.boom.draw();


                setTimeout(() => {
                    this.lessFrustration = this.lessFrustration.filter(obs => obs.posX !== posX && obs.posY !== posY);
                }, 300);
            }
        });
    },

    clear() {
        this.code = this.code.filter(obs => obs.posY < 825);
        this.lessFrustration = this.lessFrustration.filter(frus => frus.posY < 825);
        // this.newupdate = this.newupdate.filter(upd => upd.posX > 2100);

    },
    clear2() {
        this.code2 = this.code2.filter(obs => obs.posY < 825);
        this.lessFrustration = this.lessFrustration.filter(frus => frus.posY < 825);
        // this.newupdate = this.newupdate.filter(upd => upd.posX > 2100);

    },

    gameOver() {
        clearInterval(this.setInterval);
        this.soundGamePlay.pause();
        this.soundLose.play();
        this.resilience = 500;
        this.knowledge = 0;

        document.getElementById("game-board").style.display = "none";
        document.getElementById("game-lose").style.display = "flex";
    },

    nextLevel() {
        clearInterval(this.setInterval);
        this.soundGamePlay.pause();
        this.soundWin.play();
        this.resilience = 500;
        this.knowledge = 0;

        document.getElementById("game-board").style.display = "none";
        document.getElementById("game-win").style.display = "flex";
    }


};