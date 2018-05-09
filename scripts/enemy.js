
function randomNum(min, max) {
    return Math.floor(Math.random() * max) + min;
}

let Enemy = function(name, maxHP, maxMP, armVal, attack, defense, magicPower, magicDefense, speed) {
    this.level = levelGen();
    this.name = name;
    this.maxHP = maxHP + Math.floor(maxHP * (this.level * 0.3));
    this.HP = this.maxHP;
    this.maxMP = maxMP + Math.floor(maxMP * (this.level * 0.3));
    this.MP = this.maxMP
    this.armVal = armVal + Math.floor(armVal * (this.level * 0.05)) ;
    this.attack = attack + Math.floor(attack * (this.level * 0.05));
    this.defense = defense + Math.floor(defense * (this.level * 0.05));
    this.magicPower = magicPower + Math.floor(magicPower * (this.level * 0.05));
    this.magicDefense = magicDefense + Math.floor(magicDefense * (this.level * 0.05));
    this.speed = speed + Math.floor(speed * (this.level * 0.05));
    this.exp =  Math.floor(Math.random() * (this.level + 10)) + 1 
            + Math.floor(this.level * ((this.level * (this.maxHP / 6 )) / 2));
};



function levelGen() {
    let level = charStats.level + Math.floor(charStats.level * 0.3);
    return level;
}

let charStats = {
    level : 1,
    expNeeded : 50,
    currentExp : 0,
    skillPoints : 0,
    name : '',
    maxHP : 100,
    HP : this.maxHP,
    maxMP : 50,
    MP : this.maxMP,
    armVal : 0,
    attack : 40,
    defense : 10,
    magicPower : 10,
    magicDefense : 10,
    speed : 5
};


// Enemy(name, HP, MP, armVal, attack, defense, magicPower, magicDefense, speed)
var goblin = new Enemy('Goblin', 20, 20, 10, 10, 15, 5, 5, 15); // 
var goblinOverlord = new Enemy('Goblin Overlord', 60, 0, 50, 35, 15, 5, 5, 5);
var randomGoblin = new Enemy ('Random Goblin', 35, 0, 30, 15, 15, 5, 5, 5);
var otherGoblin = new Enemy ('Other Goblin', 35, 0, 30, 15, 15, 5, 5, 5);
var niceGoblin = new Enemy ('Nice Goblin', 10, 10, 5, 15, 15, 10, 5, 5);
var shittyGoblin = new Enemy ('Shitty Goblin', 60, 0, 30, 10, 15, 5, 5, 5);




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
                    let atkPow = charStats.attack + Math.floor(charStats.attack * 0.3) + weapon.attack;
                    let defPow = target.defense;
                    let apVal = target.armVal - weapon.AP;
                    let dmg = Math.floor((atkPow - defPow) / apVal) + weapon.AP;
                    critHit ? dmg = dmg*2 : false;
                    target.HP = target.HP - dmg;
                    console.log(dmg);
                
                    if(target.HP <= 0) { // when enemy is defeated
                        console.log(`${target.name} is defeated!!!!`);
                        charStats.currentExp = charStats.currentExp + target.exp; // add the exp value from enemy to the characters exp bank
                    }
            }


let enemies = [randomGoblin, otherGoblin, goblinOverlord, shittyGoblin, goblin, niceGoblin];

const $fightCont = document.querySelector('.fight-cont');
//  FUNCTION TO APPEND AMOUNT OF ENEMIES TO BATTLE SCREEN
                    // sort enemies into weak, medium and strong arrays
                    function weakEnem(enemy) {
                        return enemy.HP < 30;
                    }
                    function medEnem(enemy) {
                        return enemy.HP >= 30 && enemy.HP <= 65;
                    }
                    function strongEnem(enemy) {
                        return enemy.HP > 65;
                    }

                    let weakEnemy = enemies.filter(weakEnem);
                    let medEnemy = enemies.filter(medEnem);
                    let strongEnemy = enemies.filter(strongEnem);


///////////////////////////////////// IM A BIT BAKED, CODE REVIEW TOMORROW 10/5/18 TO MAKE SURE IT'S ALL GOOD
                    function enemyGen() {
                        // gen random number of enemies
                        let numEnemies = randomNum(1, 4);
                        // pushes enemy container elements to DOM
                        let output = '';
                        for (let i = 0; i < numEnemies; i++) {
                                output += `<article></article>`;
                            }
                        $fightCont.innerHTML = output;
                        // set class for all enemies
                        let enemy = $fightCont.querySelectorAll('article');
                        // console.log(enemy);

                        enemy.forEach(enemy =>enemy.classList.add('enemy'));
                        // find what enemies will appear
                        let enemySelect = [];
                        if (numEnemies === 1) {
                            let index = numEnemies;
                            
                            enemySelect = weakEnemy.concat(medEnemy.concat(strongEnemy));
                            
                            console.log(enemySelect);
                        } else if (numEnemies === 2) {

                        } else if (numEnemies === 3) {

                        } else {

                        }


                    }

                    
    

