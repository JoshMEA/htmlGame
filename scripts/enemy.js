
let Enemy = function(name, HP, MP, armVal, attack, defense, magicPower, magicDefense, speed) {
    this.level = levelGen(),
    this.name = name,
    this.HP = HP + Math.floor(HP * (this.level * 0.3)),
    this.MP = MP + Math.floor(MP * (this.level * 0.3)),
    this.armVal = armVal + Math.floor(armVal * (this.level * 0.15)) ,
    this.attack = attack,
    this.defense = defense,
    this.magicPower = magicPower,
    this.magicDefense = magicDefense,
    this.speed = speed,
    this.exp =  Math.floor(Math.random() * (this.level + 5)) + 1 
            + Math.floor(this.level * ((this.level * (HP / 6 )) / 2))   
};



function levelGen() {
    let level = charStats.level + Math.floor(charStats.level * 0.3);
    return level;

}

let charStats = {
    level : 10,
    expNeeded : 10,
    currentExp : 0,
    skillPoints : 0,
    name : '',
    HP : 100,
    MP : 50,
    armVal : 0,
    attack : 15,
    defense : 10,
    magicPower : 10,
    magicDefense : 10,
    speed : 5
};


// Enemy(name, HP, MP, armVal, attack, defense, magicPower, magicDefense, speed)
let goblin = new Enemy('Goblin', 20, 0, 10, 10, 15, 5, 5, 15); // 
let goblinOverlord = new Enemy('Goblin Overlord', 100, 0, 30, 35, 15, 5, 5, 5);

