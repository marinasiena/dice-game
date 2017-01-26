console.clear();
"use strict";

let diceGame = {

    regions: {
        message: null,
        stats: null,
        die1: null,
        die2: null,
        roll: null,
        timeTaken: null,
        timeStarted: null,
        winStats: null,
    },

    currentTimeNow: 0,
    wins: 0,
    numRolls: null,
    secondsStart: 0,
    timeTaken: 0,
    totalTime: [],
    ttRoll: 0,

    startTime() {
        this.secondsStart = new Date().getTime();
        let display = this.regions.timeStarted.innerHTML = new Date();
        return this.secondsStart;
    },

    winTime() {
        let secondsEnd = new Date().getTime();
        this.timeTaken = Math.floor((secondsEnd - this.secondsStart) / 1000);
        let display = this.regions.timeTaken.innerHTML = `Congrats!  You did that in ${this.timeTaken} seconds!`;
        return this.timeTaken;
    },

    generateRandom() {
        let die1num = Math.floor(Math.random() * 6, 10) + 1;
        let die2num = Math.floor(Math.random() * 6, 10) + 1;
        let die1 = this.regions.die1.innerHTML = die1num;
        let die2 = this.regions.die2.innerHTML = die2num;
        this.ttlRoll = (die1num + die2num);
    },

    roll() {
        event.preventDefault();
        this.generateRandom();
    },

    isWin() {
        if ((this.ttlRoll === 7) || (this.ttlRoll === 11)) {
            this.winTime();
            this.wins++;
            this.regions.message.innerHTML = `WINNER`;
            this.regions.stats.innerHTML = `It took you ${this.numRolls + 1} tries.`;
            return;
        } else {
            this.regions.message.innerHTML = `Nope.  Try Again`;
        }
    },

    gamesWon() {
        this.regions.winStats.innerHTML = `You have won ${this.wins} games.`;
    },


    gameRound() {
        this.startTime();
        this.regions.roll.addEventListener("click", () => {
            this.roll();
            this.isWin();
            this.numRolls++;
        });
    },

    defineRegions() {
        this.regions.timeStarted = document.querySelector('.timeStarted');
        this.regions.timeTaken = document.querySelector('.timeTaken');
        this.regions.die1 = document.querySelector('.die1');
        this.regions.die2 = document.querySelector('.die2');
        this.regions.roll = document.querySelector('.roll-button');
        this.regions.message = document.querySelector('.message');
        this.regions.stats = document.querySelector('.stats');
        this.regions.winStats = document.querySelector('.winStats');
    },

    init() {
        this.defineRegions();
        this.gameRound();
    }
}

diceGame.init();
