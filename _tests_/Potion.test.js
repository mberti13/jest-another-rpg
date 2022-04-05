//imports constructor from Potion.js
const Potion = require('../lib/Potion.js');

//test
test('creates a health potion object', ()=>{
    //test that new potion has name of 'health'
    const potion = new Potion('health')

        //Potion must be named health and return a random value 
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

test('Creates a random potion object',()=>{
    const potion = new Potion();


    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});
