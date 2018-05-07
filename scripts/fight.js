
// let spells = [];

// function Spell(name, type, power) {
//     this.name = name;
//     this.type = type;
//     this.power = power;
//     spells.push(this);
// }

let weapons = [];
function Weapon(name, type, AP, attack, weight, value) {
    this.name = name;
    this.type = type;
    this.AP = AP;
    this.attack = attack;
    this.weight = weight;
    this.value = value;
    weapons.push(this);
}

// these stats and calculations are good for a basic enemy at the start of the game
// 


let charStats = {
    level : 10,
    expNeeded : 100,
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

let enemy = {
    name : 'Goblin',
    HP : 35,
    MP : 10,
    amrVal : 10, 
    level : 1,
    attack : 20,
    defense : 15,
    magicPower : 5,
    magicDefense : 25,
    speed : 5
}

// attack function 

function attack(target, weapon) {
    let critHit = Math.random().toFixed(2);
    console.log(critHit);
    //find what thing is being used to attack
        // weapon
        let atkPow = charStats.attack + weapon.attack;
        let defPow = target.defense;
        let dmg = (atkPow - defPow) / target.amrVal;
        critHit >= 0.75 ? dmg = dmg*2 : false;
        target.HP = target.HP - dmg;
        console.log(target.HP);
    
        if(target.HP <= 0) {
            console.log(`${target.name} is defeated!!!!`);
        }
}



var longSword = new Weapon('Longsword', 'Sword', 10, 50, 20, 300);
// var fireStaff = new Weapon('Firestaff', 'Staff', 1, 10, 5, 700);

// var fireBlast = new Spell('Fireblast', 'Fire', 150);







// NOTES
    // 
