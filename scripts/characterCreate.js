
const $menuCont = document.querySelector('.menu-container');
const $charCreate = $menuCont.querySelector('.char-create');
const $statsList = $charCreate.querySelector('.stats-list');
const $attribute = $statsList.querySelectorAll('span');
const $skillPoints = $charCreate.querySelector('.skill-points');
const $subBtn = $charCreate.querySelectorAll('[data-sub]');
const $addBtn = $charCreate.querySelectorAll('[data-add]');
const $attrVal = $statsList.querySelectorAll('[data-attrVal]');
const $attrName = $statsList.querySelectorAll('[data-attrName]');
const $createBtn = $charCreate.querySelector('button');


let charStats = {
    level : 1,
    expNeeded : 100,
    currentExp : 0,
    skillPoints : 0,
    name : '',
    maxHP : 100,
    HP : maxHP,
    maxMP : 100,
    MP : maxMP,
    armVal : 0,
    attack : 0,
    defense : 0,
    magicPower : 0,
    magicDefense : 0,
    speed : 0
};

window.addEventListener('load', loadLevelScreen); // run the level increase function when window loads

$addBtn.forEach(btn => btn.addEventListener('click', addAttribute));
$subBtn.forEach(btn => btn.addEventListener('click', subAttribute));

function loadLevelScreen() {
    $skillPoints.textContent = charStats['skillPoints']; // populates the DOM element with the amount of skill points in charStats skillPoints bank

    // forEach method is 3 times faster than the for loop, however doesn't populate the DOM elements with the required data. Still works though
       
        // $attrVal.forEach(val => {
        //     let index = [...$attrVal].indexOf(val);
        //     let attr = $attrName[index].dataset.attrname;
    
        //     $attrVal[index] = charStats[attr];
        // });
    
    for (let i = 0; i < $attrName.length; i++) { // sets all the DOM elements for each attribute to that of charStats object
        let attr = $attrName[i].dataset.attrname;
        $attrVal[i].textContent = charStats[attr];
    }
}

function addAttribute() {
    const index = [...$addBtn].indexOf(this);
    const currentAttribute = $attrName[index].dataset.attrname; // gets the attribute that is being added to

    if (charStats['skillPoints'] > 0) { // if player has skill points
        charStats[currentAttribute]++; // + 1 to that attribute in the charStats object
        charStats['skillPoints']--; // -1 from the skill point bank in charStats object
        $skillPoints.textContent = charStats['skillPoints']; // updates the amount of skill points available in the DOM
        const currentAttributeVal = charStats[currentAttribute]; //gets the current attributes value
        $attrVal[index].textContent = currentAttributeVal; // updates the amount of points for that attribute in the DOM
        console.log(currentAttribute, charStats[currentAttribute]);
    }
}

function subAttribute() {
    const index = [...$subBtn].indexOf(this);
    const currentAttribute = $attrName[index].dataset.attrname; // gets the attribute that is being subtracted

    if (charStats[currentAttribute] <= 0) {
            return false;
        } else {
            charStats[currentAttribute]--; // + 1 to that attribute in the charStats object
            charStats['skillPoints']++; // +1 to the skill point bank in charStats object
            $skillPoints.textContent = charStats['skillPoints']; // updates the amount of skill points available in the DOM
            const currentAttributeVal = charStats[currentAttribute]; //gets the current attributes value
            $attrVal[index].textContent = currentAttributeVal; // updates the amount of points for that attribute in the DOM
        }
}

$createBtn.addEventListener('click', () => {
    const nameInput = $charCreate.querySelector('input');
    if (nameInput.value === '') {
        console.log('no name motherfucker!!!');
        return false;
    } else {
        charStats['name'] = nameInput.value;
    }
});

// Notes
    // this creation screen doubles as the level up screen. When it has been used to create the character in the beginning,
    // the text in $createBtn will change to 'Done' and the name input field will disappear
    // all functionality with adding and subtracting from the attributes will remain the same 
