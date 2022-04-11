const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player{
constructor(name = ''){
    this.name = name;

    //assigns values to health, strength, and agility
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    //create inventory array
    this.inventory = [new Potion('health'), new Potion()];


}

getStats () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
}
    //function to get Inventory for each new player
    getInventory(){
        if(this.inventory.length){
            return this.inventory;
        }
        return false;
    };
    //function to add potion to player inventory
    addPotion(potion){
        this.inventory.push(potion);
    };

    //function to use potion from inventory
    usePotion(index){
        const potion = this.getInventory().splice(index, 1)[0];

    //switch statement to determine the stats affected base on potion name
    switch(potion.name){
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
};


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

//inherit prototype methods from Character.js here
// Player.prototype = Object.create(Character.prototype);

//function to get Player stats for each new player




//function to get player's health value
// Player.prototype.getHealth = function () {
//     return `${this.name}'s health is now ${this.health}!`;
// };

// //function to tell program if player is alive
// Player.prototype.isAlive = function(){
//     if(this.health === 0){
//         return false;
//     }
//     return true;
// };

// //function to subtract from player health without going below 0
// Player.prototype.reduceHealth = function (health) {
//     this.health -= health;

//     if(this.health < 0){
//         this.health = 0;
//     }
// };

// //function to get player's attack value
// Player.prototype.getAttackValue = function(){
//     const min = this.strength - 5;
//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max - min) + min);
// };





//export Player constructor to Player.test.js to run tests green
module.exports = Player;