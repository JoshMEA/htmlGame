
const $backgroundImg = document.querySelector('.gameImg');
const $gameScreen = document.querySelector('.game-screen');
let currentScene = 0;
const scenes = [
    {
        imgSrc : 'images/image.jpg',
        objects : [
            {   props : {
                startX : 396,
                startY : 229,
                width : 182,
                height : 86 },            
                type : 'table'
            },
            {   props : {
                startX : 687,
                startY : 236,
                width : 104,
                height : 121 },            
                type : 'chair'
            }
        ]
    },
    {},
    {}
];

window.addEventListener('load', () => {
    $backgroundImg.src = scenes[currentScene].imgSrc;
    // $backgroundImg.style.backgroundImage = `url(${scenes[currentScene].imgSrc})`;
});

// make function to get the mouse coordinates so I know where to place interactable objects
let clickCount = 0;

let elemDims = {
    start : {
        x : '',
        y : ''
    },
    width : '',
    height : ''
};

let clickCoords = [];
// clickCoords[0] first click top left
// clickCoords[1] second click top right
// clickCoords[2] third click bottom right
// clickCoords[3] fourth click bottom left


$backgroundImg.addEventListener('click', getCoords);

function getCoords(e) {
    // e.preventDefault();
    if (clickCount < 3) { // runs first block up until 4 clicks on screen
        // gets positions of all clicks and pushes to array
        let arrayIndex = {
            x : e.clientX,
            y : e.clientY
        };
        clickCoords.push(arrayIndex);
        clickCount++; // adds +1 to click count
    } else { // after four clicks have happened
        // code to work out starting position coords, height and width of element
        elemDims.start.x = clickCoords[0].x;
        elemDims.start.y = clickCoords[0].y;
        elemDims.width = clickCoords[1].x - clickCoords[0].x;
        elemDims.height = clickCoords[2].y - clickCoords[1].y;
        console.table(elemDims);
    }
}

// function to push the interactable elements to DOM
scenes[currentScene].objects.forEach(obj => {
    let index = [...scenes[currentScene].objects].indexOf(obj);
    let node = document.createElement('article');
    $gameScreen.appendChild(node);

    let objects = $gameScreen.querySelectorAll('article');

    objects[index].classList.add('object');
    objects[index].setAttribute('data-object', scenes[currentScene].objects[index].type);
    objects[index].style.top = `${scenes[currentScene].objects[index].props['startY']}px`;
    objects[index].style.left = `${scenes[currentScene].objects[index].props['startX']}px`;
    objects[index].style.height = `${scenes[currentScene].objects[index].props['height']}px`;
    objects[index].style.width = `${scenes[currentScene].objects[index].props['width']}px`;

    console.log(objects);


});

function renderObjects() {

// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

}




// NOTES

// window.load function will eventually be assigned to a function when the game screen changes, 
// after a battle/area change etc

