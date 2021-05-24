// const inputRef = document.querySelector('input#validation-input');
// const stringLength = inputRef.getAttribute('data-length');

// function inputValidation(event) { 
//     let inputString = inputRef.getAttribute('value');
//     if (inputRef.value.length == stringLength) {
//         inputRef.classList.add('valid');
//         inputRef.classList.remove('invalid');
//     } else {
//         inputRef.classList.add('invalid');
//         inputRef.classList.remove('valid');
//     }
// };

// inputRef.addEventListener('change', inputValidation);



const inputEl = document.querySelector('#validation-input');
const currentValue = inputEl.getAttribute('data-length');
console.log(currentValue)


let currentValueLength = parseInt(currentValue, 10);
const onInputBlur = event => {
      
     if (inputEl.value.length ===0 ) {
        
        inputEl.classList.remove('invalid');
        inputEl.classList.remove('valid');
        return
    } 
    
    if (inputEl.value.length === currentValueLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
        return
    } 
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    
      
};
inputEl.addEventListener('blur', onInputBlur);











