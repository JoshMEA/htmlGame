

let Enemy = function(name, HP, MP, armVal, attack, defense, magicPower, magicDefense, speed) {
    this.level = charStats.level,
    this.name = name,
    this.HP = HP + Math.floor(HP * (this.level * 0.3)),
    this.MP = MP + Math.floor(MP * (this.level * 0.3)),
    this. armVal = armVal,
    this.attack = attack,
    this.defense = defense,
    this.magicPower = magicPower,
    this.magicDefense = magicDefense,
    this.speed = speed,
    this.exp = expGen
};


function expGen() {
// generates an amount of exp points to level up the character
    // eg: character Level 5 will get anywhere between 13 and 23 exp
    let expOut = Math.floor(Math.random() * (this.level + 5)) + 1 + Math.floor(this.level * (this.level / 2));
    return expOut;
}

let charStats = {
    level : 10,
    expNeeded : 10,
    currentExp : 0,
    skillPoints : 0,
    name : '',
    HP : 100,
    MP : 50,
    attack : 15,
    defense : 10,
    magicPower : 10,
    magicDefense : 10,
    speed : 5
};


// Enemy(name, HP, MP, armVal, attack, defense, magicPower, magicDefense, speed)
let goblin = new Enemy('Goblin', 20, 0, 10, 10, 15, 5, 5, 15);
let goblinOverlord = new Enemy('Goblin Overlord', 100, 0, 30, 35, 15, 5, 5, 5);

