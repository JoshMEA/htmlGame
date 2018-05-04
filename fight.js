
let weapons = [];

let spells = [];

function Spell(name, type, power) {
    this.name = name;
    this.type = type;
    this.power = power;
    spells.push(this);
}

function Weapon(name, type, dmgType, elem, attack, weight, value) {
    this.name = name;
    this.type = type;
    this.dmgType = dmgType;
    this.elem = elem;
    this.attack = attack;
    this.weight = weight;
    this.value = value;
    weapons.push(this);
}
 
let charStats = {
    level : 1,
    skillPoints : 50,
    name : '',
    HP : 100,
    MP : 50,
    attack : 0,
    defense : 0,
    magicPower : 0,
    magicDefense : 0,
    speed : 0
};

let enemy = {
    name : 'Goblin',
    HP : 50,
    MP : 10,
    amrVal : 10, 
    type : 'Dark',
    level : 1,
    attack : 20,
    defense : 15,
    magicPower : 5,
    magicDefense : 25
}

// attack function 

function attack(target, weapon) {
    let critHit = Math.random().toFixed(2);
    console.log(critHit);
    //find what thing is being used to attack
        // weapon
        if (weapon.dmgType === 'phys') {

            let atkPow = charStats.attack + weapon.attack;
            let defPow = target.defense;
            let dmg = (atkPow - defPow) / enemy.amrVal;
            critHit >= 0.75 ? dmg = dmg*2 : false;
            enemy.HP = enemy.HP - dmg;
            console.log(enemy.HP);

        } else if (weapon.dmgType === 'mgc') {

        }
        
        if(enemy.HP <= 0) {
            console.log(`${enemy.name} is defeated!!!!`);
        }
}



var longSword = new Weapon('Longsword', 'Sword', 'phys', '', 50, 20, 300);
var fireStaff = new Weapon('Firestaff', 'Staff', 'phys', 'fire', 10, 5, 700);

var fireBlast = new Spell('Fireblast', 'Fire', 150);

for (let i = 0; i < weapons.length; i++) {
    
    if (weapons[i].elem === 'fire') {
        weapons[i].spells = [fireBlast];
    }
}

attack(enemy, longSword);
