let itemsArray = [];

function Item(name, value, weight, description) {
    this.weight = weight;
    this.value = value;
    this.name = name;
    this.description = description;
    itemsArray.push(this);
}

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

let armour = [];
function Armour(name, weight, type, value, defVal) {
    this.name = name;
    this.weight = weight;
    this.type = type;
    this.value = value;
    this.defVal = defVal;
    armour.push(this);
}

// Items 
let potion = new Item('Potion', 100, 1, 'Restores 10 HP');
let bigPotion = new Item('Big Potion', 250, 1, 'Restores 50 HP');

// Weapons
let longSword = new Weapon('Longsword', 'sword', 5, 10, 20, 300);

// Defense 
let helmet = new Armour('Helmet', 5, 'head', 100, 5);

let equipment = itemsArray.concat(armour.concat(weapons));

equipment.forEach(item => {
    let node = document.createElement('div');
    let child = document.createElement('article');
    let itemsList = document.querySelector('.items');
    itemsList.appendChild(node);
    node.classList.add('item-container');
    node.classList.add('box');
    node.appendChild(child);
    child.classList.add('item');
    child.draggable = true;
    child.dataset.name = item.name;
    child.dataset.value = item.value;
    child.dataset.type = item.type;
});


// Drag handlers
let items = document.querySelectorAll('.item');
let boxes = document.querySelectorAll('.box');

let active;
let lastBox;

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});



// loop through empty containers
boxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
});
// for (const box of boxes) {
//     box.addEventListener('dragover', dragOver);
//     box.addEventListener('dragenter', dragEnter);
//     box.addEventListener('dragleave', dragLeave);
//     box.addEventListener('drop', dragDrop);

// }


// drag functions

function dragStart() {
    active = this;
    lastBox = this.parentNode;
    // this.classList.add('hold');
    setTimeout(() => this.classList.add('invis'), 0);
}

function dragEnd() {
    console.log('end');
    this.classList.remove('invis');
    // this.classList.remove('hold');
}


function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}
function dragLeave() {
    this.classList.remove('hovered');
}
function dragDrop() {
    this.classList.remove('hovered');
    if (this.hasChildNodes()) { // if the box already has something in it
        let elem = this.childNodes[0]; // the fill already in the box
        lastBox.appendChild(elem); // moves the fill to the box we just grabbed something from
        this.appendChild(active); // places the dragged element into the new box
    } else { // otherwise 
        this.appendChild(active); // just put the fill down in the box!!!
    }
    // resets the current dragged item and the box it was grabbed from
    active = null; 
    lastBox = null;
}

