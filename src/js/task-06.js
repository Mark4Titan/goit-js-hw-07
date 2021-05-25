const inputRef = document.querySelector('input#validation-input');
const stringLength = inputRef.getAttribute('data-length');

function inputValidation(event) { 
     
    if (inputRef.value.length == stringLength) {       
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');       
    }

     
    if (/^\s+$/.test(event.target.value)) {inputRef.value = ''}
    
    // if(inputRef.value === ''){inputRef.classList.remove('invalid');}
    if (inputRef.value.length === 0) { inputRef.classList.remove('invalid'); }
};

inputRef.addEventListener('change', inputValidation);









