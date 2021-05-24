const textInput = document.querySelector('input#name-input');
const textDisplay = document.querySelector('span#name-output');

textInput.addEventListener('input', textHandler);

function textHandler(event) {
    if (event.target.value.length > 0) {
        textDisplay.textContent = event.target.value;
    } else {
        textDisplay.textContent = 'незнакомец';
    };
};