const fills = document.querySelectorAll('.fill');
const boxes = document.querySelectorAll('.box');
let active;
let lastBox;
// fill listeners 
fills.forEach(fill => {
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);
});



// loop through empty containers
for (const box of boxes) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);

}


// drag functions

function dragStart() {
    active = this;
    lastBox = this.parentNode;
    this.classList.add('hold');
    setTimeout(() => this.classList.add('invis'), 0);
}

function dragEnd() {
    console.log('end');
    this.classList.remove('invis');
    this.classList.remove('hold');
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
