const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

test('creates an enemy object', () =>{
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.name).toBe('goblin');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

test("gets enemy's health value", () =>{
    const enemy = new Enemy('goblin', 'sword');

    //expect enemy.getHealth() to equal a string containing the health value as a string
    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
})

//test to see if enemy is alive
test('checks if enemy is alive or not', () =>{
    const enemy = new Enemy('goblin', 'sword');

    //enemy is alive by default
    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0
    //when enemy.health = 0, enemy.isAlive() is false
    expect(enemy.isAlive()).toBeFalsy();
});

//test to reduce enemy's health
test("subtracts from enemy health", () =>{
    const enemy = new Enemy('goblin', 'sword');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);
    
    enemy.reduceHealth(99999);

    expect(enemy.health).toBe(0);
});

//test to find enemy weapon
test('gets a description of the enemy', () =>{
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
});
