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
});

//test to retrieve player's health value
test("gets player's health value", () =>{
    const player = new Player('Dave');

    //expect player.getHealth() to equal a string containing the health value as a string
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
})

//test to see if player is alive
test('checks if player is alive or not', () =>{
    const player = new Player('Dave');

    //player is alive by default
    expect(player.isAlive()).toBeTruthy();

    player.health = 0
    //when player.health = 0, player.isAlive() is false
    expect(player.isAlive()).toBeFalsy();
})

//test to reduce player's health
test("subtracts from player's health", () =>{
    const player = new Player('Dave');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);
    
    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});

//tests for the player's attack value
test("gets player's attack value", () =>{
    const player = new Player('Dave');
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

//tests the use of potions
test("adds a potion to inventory", () =>{
    const player = new Player('Dave');
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount);
});

//tests for the use of a potion in inventory and stats
test("uses a potion from inventory", () =>{
    const player = new Player('Dave');
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
});


