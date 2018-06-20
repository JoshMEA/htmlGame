

const $gameScreen = document.querySelector('.game-screen');
const $scene = $gameScreen.querySelector('.scene');
const $backgroundImg = $gameScreen.querySelector('.scene-img');
let $objects;
let currentScene = 0;
let scenes = [];
let objects = [];

/* SCENE CONSTRUCTOR FUNCTION */
    // imgSrc is a string for the file path of the image for the scene
    // objects is an array of interactable objects for the scene
    // enemies is an array of enemies used in the scene
let Scene = function(sceneNum, name, objects, enemies) {
    this.name = name;
    this.sceneNum = sceneNum;
    this.imgSrc = `images/scene${sceneNum}.jpg`;
    this.objects = objects;
    this.enemies = enemies;
    scenes.push(this);
}

/* OBJECT CONSTRUCTOR FUNCTION */
// startX, startY, width, height value type is int
// type and name must be strings
// type must be set to person, enemy, container, waypoint etc.
// Scene number set to int 
let Object = function(sceneNum,startX, startY, width, height, type, name) {
    let props = function(startX, startY, width, height) {
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
    }
    this.sceneNum = sceneNum;
    this.props = new props(startX, startY, width, height);
    this.type = type;
    this.name = name;
    objects.push(this);
}

// DEFINING OBJECTS
let table = new Object(1, 396, 176, 178, 80, '', 'table');
let chair = new Object(1, 687, 181, 104, 90, '', 'chair');
let lounge = new Object(1, 370, 30, 285, 100, '', 'lounge');

let testObject = new Object(2, 370, 30, 285, 100, '', 'lounge');
let testObject2 = new Object(3, 370, 30, 285, 100, '', 'lounge');

// DEFINING SCENE SPECIFIC OBJECTS
let scene1Obj = objects.filter(x => x.sceneNum === 1);
let scene2Obj = objects.filter(x => x.sceneNum === 2);
let scene3Obj = objects.filter(x => x.sceneNum === 3);

// DEFINING A SCENE
const scene1 = new Scene(1, 'Opening Scene', scene1Obj, undefined);

window.addEventListener('load', () => {
    $backgroundImg.src = scenes[currentScene].imgSrc;
    // $backgroundImg.style.backgroundImage = `url(${scenes[currentScene].imgSrc})`;
});


//This block includes the function to get the dimensional properties of an object////////////////////////////////
//You can comment it out when not in use, it is not needed for actually running the game, just used in the build phase
                // let clickCount = 0;
                // let elemDims = {
                //     start : {
                //         x : '',
                //         y : ''
                //     },
                //     width : '',
                //     height : ''
                // };
                // let clickCoords = [];
                // // clickCoords[0] first click top left
                // // clickCoords[1] second click top right
                // // clickCoords[2] third click bottom right
                // // clickCoords[3] fourth click bottom left
                // $backgroundImg.addEventListener('click', getCoords);
                // function getCoords(e) {
                //     // e.preventDefault();
                //     if (clickCount < 3) { // runs first block up until 4 clicks on screen
                //         // gets positions of all clicks and pushes to array
                //         let arrayIndex = {
                //             x : e.clientX,
                //             y : e.clientY
                //         };
                //         clickCoords.push(arrayIndex);
                //         clickCount++; // adds +1 to click count
                //     } else { // after four clicks have happened
                //         // code to work out starting position coords, height and width of element
                //         elemDims.start.x = clickCoords[0].x;
                //         elemDims.start.y = clickCoords[0].y;
                //         elemDims.width = clickCoords[1].x - clickCoords[0].x;
                //         elemDims.height = clickCoords[2].y - clickCoords[1].y;
                //         console.table(elemDims);
                //     }
                // }

// pushes interactable objects to DOM
scenes[currentScene].objects.forEach(obj => {
    let index = [...scenes[currentScene].objects].indexOf(obj);
    let node = document.createElement('article');
    $scene.appendChild(node);

    $objects = $scene.querySelectorAll('article'); // sets variable for all interactable elements

    $objects[index].classList.add('object'); // applies css class to object
    $objects[index].setAttribute('data-type', scenes[currentScene].objects[index].type); //sets object type
    $objects[index].setAttribute('data-name', scenes[currentScene].objects[index].name); //sets object name

    $objects[index].style.top = `${scenes[currentScene].objects[index].props['startY']}px`; // sets start x, y coords
    $objects[index].style.left = `${scenes[currentScene].objects[index].props['startX']}px`;//
    $objects[index].style.height = `${scenes[currentScene].objects[index].props['height']}px`;//sets height of object
    $objects[index].style.width = `${scenes[currentScene].objects[index].props['width']}px`; //sets width of object
});

// when mouse over an object, popup appears with available actions
$objects.forEach(obj => obj.addEventListener('mouseover', displayPopup));

function displayPopup() {
    console.time();
    let index = [...$objects].indexOf(this);
    let type = $objects[index].dataset.type;// gets the type of object 
    let name = $objects[index].dataset.name;// gets name of object
    let output;
    // switch cases for what output will be
    switch (type) {
        case 'container':
            output = `Open ${name}`;
            break;
        case 'enemy':
            output = `Attack ${name}!!!`;
            break;
        default:
            output = 'Interact';
    }

    $objects[index].textContent = output; // sets output to the required text

    if ($objects[index].offsetTop < 170) { // if the object is close to the top of the screen
        $objects[index].classList.add('hover-object-under'); // animates the text under object
        $objects[index].addEventListener('mouseleave', () => this.classList.remove('hover-object-under'));
    } else { // else if the object is not near top of screen
        $objects[index].classList.add('hover-object-above'); // animates the text above object
        $objects[index].addEventListener('mouseleave', () => this.classList.remove('hover-object-above'));
    }

    console.timeEnd();
}





// NOTES

// window.load function will eventually be assigned to a function when the game screen changes, 
// after a battle/area change etc

