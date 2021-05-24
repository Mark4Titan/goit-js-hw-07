const btnCreate = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const inQn = document.querySelector('div#controls input');
const bigBox = document.querySelector('div#boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

let newWidth;
let newHeight;


if (newWidth == null || newHeight == null){nextSize(null);}

function createBoxes(amount) {
    for (let i = 0; i < inQn.value; i++) {

        const addDiv = document.createElement("div");
        nextSize(10);
        addDiv.style = styleDesigner();   
        bigBox.appendChild(addDiv);
    }
}
    
function destroyBoxes(event) { 
     bigBox.innerHTML = '';
     nextSize(null);
};

function nextSize(nextSize) {
    if (nextSize == null) {
        newWidth = 30;
        newHeight = 30;
        inQn.value = 0; // в умові не вказано, але галаю так правильніше
    } else {
        newWidth += nextSize;
        newHeight += nextSize;    
    } 
}
 


function styleDesigner() {
     return  `background-color:#` + `${ColorBoxes()}; width: ${newWidth}px; height: ${newHeight}px;`;
}
 
function ColorBoxes() {
     return (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
 }


