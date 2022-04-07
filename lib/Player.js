const Potion = require('../lib/Potion');

function Player(name){
    this.name = name;

    //assigns values to health, strength, and agility
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    //create inventory array
    this.inventory = [new Potion('health'), new Potion()];


    // //returns an object with various player properties(returns player stats)
    // this.getStats = function(){
    //     return{
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility
    //     };
    // };

    // // returns inventory array or false if empty
    // this.getInventory = function(){
    //     if(this.inventory.length){
    //         return this.inventory;
    //     }
    //     return false;
    // }
}

//PROTOTYPE SYNTAX

//function to get Player stats for each new player
Player.prototype.getStats = function(){
    return{
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

//function to get Inventory for each new player
Player.prototype.getInventory = function(){
    if(this.inventory.length){
        return this.inventory;
    }
    return false;
};

//function to get player's health value
Player.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}!`;
};

//function to tell program if player is alive
Player.prototype.isAlive = function(){
    if(this.health === 0){
        return false;
    }
    return true;
};

//function to subtract from player health without going below 0
Player.prototype.reduceHealth = function (health) {
    this.health -= health;

    if(this.health < 0){
        this.health = 0;
    }
};


//export Player constructor to Player.test.js to run tests green
module.exports = Player;