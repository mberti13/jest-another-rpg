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

