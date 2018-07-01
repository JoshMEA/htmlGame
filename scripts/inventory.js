let items = [];

function Item(name, value, weight, description) {
    this.weight = weight;
    this.value = value;
    this.name = name;
    this.description = description;
    items.push(this);
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

let equipment = items.concat(armour.concat(weapons));

equipment.forEach(item => {
    let node = document.createElement('article');
    let itemsList = document.querySelector('.items');
    itemsList.appendChild(node);
    node.classList.add('item');
    node.draggable = true;
    node.dataset.name = item.name;
    node.dataset.value = item.value;
    node.dataset.type = item.type;
});




