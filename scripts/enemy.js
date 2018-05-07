
let Enemy = function(name, HP, MP, armVal, attack, defense, magicPower, magicDefense, speed) {
    this.level = levelGen();
    this.name = name;
    this.HP = HP + Math.floor(HP * (this.level * 0.3));
    // this.HP = hpGen(HP);
    this.MP = MP + Math.floor(MP * (this.level * 0.3));
    this.armVal = armVal + Math.floor(armVal * (this.level * 0.15)) ;
    this.attack = attack + Math.floor(attack * (this.level * 0.15));
    this.defense = defense + Math.floor(defense * (this.level * 0.15));
    this.magicPower = magicPower + Math.floor(magicPower * (this.level * 0.15));
    this.magicDefense = magicDefense + Math.floor(magicDefense * (this.level * 0.15));
    this.speed = speed + Math.floor(speed * (this.level * 0.15));
    this.exp =  Math.floor(Math.random() * (this.level + 5)) + 1 
            + Math.floor(this.level * ((this.level * (HP / 6 )) / 2));
};



function levelGen() {
    let level = charStats.level + Math.floor(charStats.level * 0.3);
    return level;
}

let charStats = {
    level : 10,
    expNeeded : 100,
    currentExp : 0,
    skillPoints : 0,
    name : '',
    HP : 100,
    MP : 50,
    armVal : 0,
    attack : 45,
    defense : 10,
    magicPower : 10,
    magicDefense : 10,
    speed : 5
};


// Enemy(name, HP, MP, armVal, attack, defense, magicPower, magicDefense, speed)
var goblin = new Enemy('Goblin', 20, 20, 10, 10, 15, 5, 5, 15); // 
var goblinOverlord = new Enemy('Goblin Overlord', 50, 0, 30, 35, 15, 5, 5, 5);



// SANDBOX FOR FIGHT.JS --- This is now working with enemy and weapon constructor functions -- fuck yeah!!!

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

            var longSword = new Weapon('Longsword', 'sword', 5, 10, 20, 300);


            function attack(target, weapon) {
                let critHit = Math.random().toFixed(2) >= 0.75;
                console.log(critHit);
                //find what thing is being used to attack
                    // weapon
                    let atkPow = charStats.attack + weapon.attack;
                    let defPow = target.defense;
                    let apVal = target.armVal - weapon.AP;
                    let dmg = Math.floor((atkPow - defPow) / apVal) + weapon.AP;
                    critHit ? dmg = dmg*2 : false;
                    target.HP = target.HP - dmg;
                    console.log(dmg);
                
                    if(target.HP <= 0) { // when enemy is defeated
                        console.log(`${target.name} is defeated!!!!`);
                        charStats.currentExp += target.exp; // add the exp value from enemy to the characters exp bank
                    }
            }

// NOTES 



