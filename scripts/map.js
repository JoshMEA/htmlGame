
const $backgroundImg = document.querySelector('.gameImg');
const $gameScreen = document.querySelector('.game-screen');
let $objects;
let currentScene = 0;
const scenes = [
    {
        imgSrc : 'images/image.jpg', // scene picture
        objects : [    // array of all interactable objects in that scene
            {   props : { // absolute positioning properties
                    startX : 396,   //topLeft xCoord
                    startY : 229,   // topLeft yCoord
                    width : 182,    // width
                    height : 86 },  // height       
                type : 'container',// object type (person, enemy, container, waypoint etc.)
                name : 'table'
            },
            {   props : {
                    startX : 687,
                    startY : 236,
                    width : 104,
                    height : 121 },            
                type : 'container',
                name : 'chair'
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
    $gameScreen.appendChild(node);

    $objects = $gameScreen.querySelectorAll('article'); // sets variable for all interactable elements

    $objects[index].classList.add('object'); // applies css class to object
    $objects[index].setAttribute('data-type', scenes[currentScene].objects[index].type); //sets object type
    $objects[index].setAttribute('data-name', scenes[currentScene].objects[index].name); //sets object type

    $objects[index].style.top = `${scenes[currentScene].objects[index].props['startY']}px`; // sets start x, y coords
    $objects[index].style.left = `${scenes[currentScene].objects[index].props['startX']}px`;//
    $objects[index].style.height = `${scenes[currentScene].objects[index].props['height']}px`;//sets height of object
    $objects[index].style.width = `${scenes[currentScene].objects[index].props['width']}px`; //sets width of object
});

// when mouse over an object, popup appears with available actions
$objects.forEach(obj => obj.addEventListener('mouseover', displayPopup));

function displayPopup() {
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
    $objects[index].classList.add('hover-object'); // animates the text above object

    $objects[index].addEventListener('mouseleave', () => this.classList.remove('hover-object'));




    console.log(type, index);
    
}





// NOTES

// window.load function will eventually be assigned to a function when the game screen changes, 
// after a battle/area change etc

