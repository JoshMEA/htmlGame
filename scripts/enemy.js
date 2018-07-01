
function randomNum(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function run(_, amntTimes) {
    for (i = 0; i < amntTimes; i++) {
        _();
    }
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
    this.exp =  Math.floor((randomNum(1, this.level + 10)) + (this.level / ((this.level / (this.maxHP * 6 )) * 2)));
    // enemies.push(this);
};



function levelGen() {
    let level = charStats.level + Math.floor(charStats.level * 0.3);
    return level;
}

let charStats = {
    level : 1,
    expNeeded : 1000,
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
                    // target.HP = target.HP - dmg;
                    target.HP -= dmg;
                    console.log(dmg);
                
                    if(target.HP <= 0) { // when enemy is defeated
                        console.log(`${target.name} is defeated!!!!`);
                        charStats.currentExp = charStats.currentExp + target.exp; // add the exp value from enemy to the characters exp bank
                    }
            }


let enemies = [randomGoblin, otherGoblin, goblinOverlord, shittyGoblin, goblin, niceGoblin];
// let enemies = [];

const $fightCont = document.querySelector('.fight-cont');
const $enemyCont = $fightCont.querySelector('.enemy-cont');
const $attackBtn = document.querySelector('.attack-btn');
let $enemy;
let $attackTarget;
// sort enemies into weak, medium and strong arrays
const weakEnemy = enemies.filter(enemy => enemy.HP < 30);
const medEnemy = enemies.filter(enemy => enemy.HP >= 30 && enemy.HP <= 65);
const strongEnemy = enemies.filter(enemy => enemy.HP > 65);

//  FUNCTION TO APPEND AMOUNT OF ENEMIES TO BATTLE SCREEN
                    // ////////// generates random number of enemies and renders them to the DOM
                    function enemyGen() {
                        // gen random number of enemies
                        let numEnemies = randomNum(1, 3);
                        // pushes enemy container elements to DOM
                        let enemyBank = []; // will have a list of enemies to randomly select from
                        let enemySelect = []; // the randomly selected enemies go here
                        let output = '';

                        for (let i = 0; i < numEnemies; i++) {
                                output += `<article></article>`;
                            }
                        //     
                        $enemyCont.innerHTML = output;
                        // set class for all enemies
                        $enemy = $fightCont.querySelectorAll('article');
                        // 
                        $enemy.forEach(enemy => enemy.classList.add('enemy'));
                        // find what enemies will appear
                        if (numEnemies === 1) {
                            enemySelect = [];
                            //randomly selects an enemy from strong, medium and weak strength enemies
                            enemyBank = weakEnemy.concat(medEnemy.concat(strongEnemy)); 
                            enemySelect.push(enemyBank[randomNum(1, enemyBank.length-1)]);
                        renderEnemy(enemySelect);
                        } else if (numEnemies === 2) {
                            enemySelect = [];
                            //randomly selects an enemy from strong and weak strength enemies
                            enemyBank = weakEnemy.concat(strongEnemy);
                            enemySelect.push(enemyBank[randomNum(1, enemyBank.length-1)]);
                            //randomly selects an enemy from medium and weak strength enemies
                            enemyBank = weakEnemy.concat(medEnemy);
                            enemySelect.push(enemyBank[randomNum(1, enemyBank.length-1)]);
                            renderEnemy(enemySelect);
                        } else {
                            enemySelect = [];
                            //randomly selects an enemy from strong, medium and weak strength enemies
                            enemyBank = weakEnemy.concat(medEnemy.concat(strongEnemy));
                            enemySelect.push(enemyBank[randomNum(1, enemyBank.length-1)]);
                            //pushes 2 random enemies from weakEnemy to enemySelect
                            run(() => {
                                enemySelect.push(weakEnemy[randomNum(1, weakEnemy.length-1)]);
                            }, 2);
                            renderEnemy(enemySelect);
                        }
                    }

                    // Puts the enemy info into the DOM
                    // target refers to $enemy, enemySelect
                    function renderEnemy(array = enemySelect) {
                        var $enemy = $fightCont.querySelectorAll('article');

                        $enemy.forEach(enemy => {
                            let index = [...$enemy].indexOf(enemy);
                            enemy.setAttribute('data-name', array[index].name);
                            enemy.setAttribute('data-HP', array[index].HP);
                            enemy.setAttribute('data-exp', array[index].exp);
                        });
                        $enemy.forEach(enemy => enemy.addEventListener('click', enemySelect));
                    }

                    function enemySelect() {
                        // clears any previously selected enemy
                        $enemy.forEach(enemy => {
                            if(enemy.classList.contains('selected-enemy') || enemy.classList.contains('target')) {
                                enemy.classList.remove('selected-enemy');
                                enemy.classList.remove('target');
                            }
                        });                        
                        let index = [...$enemy].indexOf(this);
                        $enemy[index].classList.add('selected-enemy');
                        $enemy[index].classList.add('target');
                        let $attackTarget = $enemyCont.querySelector('.target');
                        // console.log($attackTarget.dataset.name, $attackTarget.dataset.hp);

                        $attackBtn.addEventListener('click', () => {
                            if($attackTarget === undefined) return false;
                            let health = $attackTarget.dataset.hp;

                            $attackTarget.classList.remove('selected-enemy');
                            $attackTarget.classList.remove('target');

                            $attackTarget.setAttribute('data-hp', health - 10);
                            health = $attackTarget.dataset.hp;
                            if (health <= 0) {
                                console.log(`${$attackTarget.dataset.name} has been defeated!!!!!!`);
                                $attackTarget.parentNode.removeChild(this);
                                
                                // add experience to charStats exp
                                let exp = $attackTarget.dataset.exp;
                                charStats.currentExp = charStats.currentExp + exp;
                                console.log(charStats.currentExp);
                            }
                            $attackTarget = undefined;
                        });
                    }



                //  NOTES 
                    // click enemy > click attack btn = works fine
                    // click enemy > click another enemy = damages both enemies! :/
                    // Need to sort this out
