const Potion = require('../lib/Potion');

function Player(name){
    this.name = name;

    //assigns values to health, strength, and agility
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    //create inventory array
    this.inventory = [new Potion('health'), new Potion()];
}

//export Player constructor to Player.test.js to run tests green
module.exports = Player;