function Potion(name){
    //adds different potion categories
    this.types = ['strength','agility','health'];
    //Sets potion name = to 
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if(this.name === 'health'){
        this.value = Math.floor(Math.random() * 10 + 30);
    }else{
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

//Exports constructor to test file
module.exports = Potion;