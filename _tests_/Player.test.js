//Imports Potion constructor from Potion.js | allows for new Potion to work in PLayer Tests
const Potion = require('../lib/Potion');

// mocks/replaces contructors implementation with mock data
jest.mock('../lib/Potion');

console.log(new Potion());

//requires player function in Player.js to run test
const Player = require('../lib/Player');
const { expect } = require('@jest/globals');

//tests for player name, strength, agility and health
test('creates a player object', ()=>{
    const player = new Player('Dave');


    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

//test for player stats object
test('gets player stats as an object', () =>{
    const player = new Player('Dave');


    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

//test for players inventory array or returns false
test('gets inventory from player or returns false', () =>{
    const player = new Player('Dave');

    //test to see if there is an inventory array
    expect(player.getInventory()).toEqual(expect.any(Array));

    //sets player inventory as an empty array if inventory is empty
    player.inventory = [];

    //returns false for empty array, as there is no inventory
    expect(player.getInventory()).toEqual(false);
})


