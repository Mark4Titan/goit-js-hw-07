
const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const displayCounter = document.querySelector('#value');

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);

// btnIncrement.addEventListener("mousedown", increment);
// btnDecrement.addEventListener("mousedown", decrement);


let counterValue = 0;


function increment (event) {
    displayCounter.textContent = ++counterValue;
};
function decrement (event) {
    displayCounter.textContent = --counterValue;
};

