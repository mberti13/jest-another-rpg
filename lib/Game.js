const inquirer = require('inquirer');
const Enemy = require('../lib/Enemy');
const Player = require('../lib/Player');

function Game(){
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy = [];
    this.player;
};
//declares objects in the this.enemies array
Game.prototype.initializeGame = function(){
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];

    //prompts user for name to declare as this.player in GAME
    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    //destructure name from the prompt object
    .then(({ name }) =>{
        this.player = new Player(name);

        //test the object creation
        // console.log(this.currentEnemy, this.player);
        //Calls the start new battle constructor
        this.startNewBattle();
    });
};



module.exports = Game;