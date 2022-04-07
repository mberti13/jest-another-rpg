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
Game.prototype.battle = function(){
    if(this.isPlayerTurn){
        inquirer
            .prompt({
                type: 'list',
                message: 'What would you like to do?',
                name: 'action',
                choices: ['Attack', 'Use potion']
            })
            .then(({action}) =>{
                if(action === 'Use potion'){
                    if(!this.player.getInventory()){
                        console.log("You don't have any potions!");
                        return;
                    }

                    inquirer
                        .prompt({
                            type: 'list',
                            message: 'Which potion would you like to use?',
                            name: 'action',
                            //creates list in CL Prompt that shows (#: potion name)
                            choices: this.player.getInventory().map((item,index) => `${index+1}: ${item.name}`)
                        })
                        .then(({action}) =>{
                            const potionDetails = action.split(': ');

                            this.player.usePotion(potionDetails[0]-1);
                            console.log(`You use a ${potionDetails[1]} potion.`);
                        });
                }else{
                    const damage = this.player.getAttackValue();
                    this.currentEnemy.reduceHealth(damage);

                    console.log(`You attacked the ${this.currentEnemy.name}!`);
                    console.log(this.currentEnemy.getHealth());
                }
            })
    }else{
        const damage = this.currentEnemy.getAttackValue();
        this.player.reduceHealth(damage);

        console.log(`You were attacked by the ${this.currentEnemy.name}!`);
        console.log(this.player.getHealth());
    }
};




module.exports = Game;