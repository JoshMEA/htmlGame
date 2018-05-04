
let weapons = [];

let spells = [];

function Spell(name, type, power) {
    this.name = name;
    this.type = type;
    this.power = power;
    spells.push(this);
}

function Weapon(name, type, dmgType, elem, atk, weight, value) {
    this.name = name;
    this.type = type;
    this.dmgType = dmgType;
    this.elem = elem;
    this.atk = atk;
    this.weight = weight;
    this.value = value;
    weapons.push(this);
}

let player = {
    name : 'Josh',
    HP : 100,
    MP : 100,
    amrVal : 7,
    type : '',
    level : 1,
    atk : 40,
    def : 25,
    mPow : 35,
    mDef : 10
}

let enemy = {
    name : 'Goblin',
    HP : 50,
    MP : 10,
    amrVal : 10, 
    type : 'Dark',
    level : 1,
    atk : 20,
    def : 15,
    mPow : 5,
    mDef : 25
}

// attack function 

function attack(target, weapon) {
    let critHit = Math.random().toFixed(2);
    console.log(critHit);
    //find what thing is being used to attack
        // weapon
        if (weapon.dmgType === 'phys') {

            let atkPow = player.atk + weapon.atk;
            let defPow = target.def;
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
