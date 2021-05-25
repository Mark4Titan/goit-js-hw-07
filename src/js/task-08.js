


const inQn = document.querySelector('#controls input');
const btnCreate = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const bigBox = document.querySelector('#boxes');



btnCreate.addEventListener('click', () => createBoxes(inQn.value));
btnDestroy.addEventListener('click', destroyBoxes);

let oldSize;
if (oldSize == null){nextSize(null);}


function createBoxes(amount) {
  let newDivs = [];
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement('div');
    
    // nextSize(10);
    newDiv.style.width = `${nextSize(10)}px`;
    newDiv.style.height = newDiv.style.width;
    newDiv.style.backgroundColor = ColorBoxes();
    newDivs.push(newDiv);
  }
  bigBox.append(...newDivs);
}

function destroyBoxes(event) { 
     bigBox.innerHTML = '';
     nextSize(null);
};

function nextSize(nextSize) {
    if (nextSize == null) {
        oldSize = 30;
        inQn.value = null; // в умові не вказано, але галаю так правильніше        
    } else {
        return oldSize += nextSize; 
    } 
}

function ColorBoxes() {
    return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
 }









