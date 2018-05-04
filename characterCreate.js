const menuCont = document.querySelector('.menu-container');
const charCreate = menuCont.querySelector('.char-create');
const statsList = charCreate.querySelector('.stats-list');
const attr = statsList.querySelectorAll('span');
const skillPoints = charCreate.querySelector('.skill-points');
const subBtn = charCreate.querySelectorAll('[data-sub]');
const addBtn = charCreate.querySelectorAll('[data-add]');
const createBtn = charCreate.querySelector('button');
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



subBtn.forEach(btn => btn.addEventListener('click', () => {
    let index = [...subBtn].indexOf(btn);
    //gets last p element of each attribute line
    let val = attr[index].querySelectorAll('p')[2];
    // console.log(val);
    if (val.textContent <= 0) {
        return false;
    } else {
        val.textContent--;
        charStats.skillPoints++;
        console.log(charStats.skillPoints);
    }    
    skillPoints.textContent++;
}));

addBtn.forEach(btn => btn.addEventListener('click', () => {
    let index = [...addBtn].indexOf(btn);
    //gets last p element of each attribute line
    let val = attr[index].querySelectorAll('p')[2];

    if (skillPoints.textContent <= 0) {
        return false;
    } else {
        val.textContent++;
        charStats.skillPoints--;
        console.log(charStats.skillPoints);
        skillPoints.textContent--;   
    }
}));


createBtn.addEventListener('click', () => {
    charStats.name = charCreate.querySelector('input').value;
    console.log(charStats.name);
});

// Notes
    // when skill points have been assigned to attributes, push into charStats variable