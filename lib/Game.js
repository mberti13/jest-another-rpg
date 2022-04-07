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
//INITIALIZES GAME FEATURES AND OBJECTS
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

//USED TO START FIRST AND CONSEQUENTIAL ROUNDS
Game.prototype.startNewBattle = function(){
    //decides who goes first based on agility stat values
    if(this.player.agility > this.currentEnemy.agility){
        this.isPlayerTurn = true;
    }else{
        this.isPlayerTurn = false;
    }

    //logs a table of player's stats
    console.log("Your stats are as follows: ");
    console.table(this.player.getStats());

    //logs a player of enemy stats
    console.log(this.currentEnemy.getDescription());

    //calls the battle function into the new battle
    this.battle();
};



module.exports = Game;