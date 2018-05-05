
const $backgroundImg = document.querySelector('.gameImg');

const scenes = [
    {
        imgSrc : 'images/image.jpg'
    },
    {},
    {}
];

window.addEventListener('load', () => {
    $backgroundImg.src = scenes[0].imgSrc;
});

// make function to get the mouse coordinates so I know where to place interactable objects
let clicks = 0;

let clickCoords = [];
// clickCoords[0] first click top left
// clickCoords[1] second click top right
// clickCoords[2] third click bottom right
// clickCoords[3] fourth click bottom left


$backgroundImg.addEventListener('click', getCoords);

function getCoords(e) {
    // e.preventDefault();

    if (clicks > 3) {
        clicks = 3;
        // run function to work out start position and height and width of interactable item
        return false;
    } else {
        let startX = e.clientX;
        let startY = e.clientY;
        let arrayIndex = {
            x : e.clientX,
            y : e.clientY
        };
        clickCoords.push(arrayIndex);
        clicks++;

    }

    console.log(clickCoords);
    
}



// NOTES

// window.load function will eventually be assigned to a function when the game screen changes, 
// after a battle/area change etc

