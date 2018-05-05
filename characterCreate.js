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
    skillPoints : 10,
    name : '',
    HP : 100,
    MP : 50,
    attack : 0,
    defense : 0,
    magicPower : 0,
    magicDefense : 0,
    speed : 0
};

window.addEventListener('load',() => {
    $skillPoints.textContent = charStats['skillPoints'];

    for (let i = 0; i < $attrName.length; i++) {
        let attr = $attrName[i].dataset.attrname;
        $attrVal[i].textContent = charStats[attr];
        console.log(charStats.attr);

    }

});


$addBtn.forEach(btn => btn.addEventListener('click', addAttribute));
$subBtn.forEach(btn => btn.addEventListener('click', subAttribute));

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
    charStats.name = charCreate.querySelector('input').value;
    console.log(charStats.name);
});

// Notes
    // when skill points have been assigned to attributes, push into charStats variable