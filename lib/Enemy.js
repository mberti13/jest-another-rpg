const Potion = require('./Potion');
const Character = require('./Character');

//function to create enemy object
function Enemy(name, weapon){
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.floor(Math.random() * 10 + 85);
    this.strength = Math.floor(Math.random() * 5 + 5);
    this.agility = Math.floor(Math.random() * 5 + 5);
};

//inherit prototype methods from Character.js here
Enemy.prototype = Object.create(Character.prototype);


// Enemy.prototype.getHealth = function () {
//     return `The ${this.name}'s health is now ${this.health}!`;
// };

// //function to tell program if Enemy is alive
// Enemy.prototype.isAlive = function(){
//     if(this.health === 0){
//         return false;
//     }
//     return true;
// };

// //function to subtract from Enemy health without going below 0
// Enemy.prototype.reduceHealth = function (health) {
//     this.health -= health;

//     if(this.health < 0){
//         this.health = 0;
//     }
// };

// //function to get Enemy's attack value
// Enemy.prototype.getAttackValue = function(){
//     const min = this.strength - 5;
//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max - min) + min);
// };
Enemy.prototype.getDescription = function(){
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;