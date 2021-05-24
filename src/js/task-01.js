

const cildLi = document.querySelectorAll('ul#categories li.item')
console.log(`В списке ${cildLi.length} категории.`);

const cildH = document.querySelectorAll('ul#categories li.item h2')
// console.log(`Количество элементов: ${cildH.length}`);


for (let i = 0; i < cildH.length; i++){

    console.log(`Категория: ${cildH[i].textContent}`)
    
    const findChil = document.querySelectorAll('ul#categories ul');

    console.log(`Количество элементов: ${findChil[i].children.length}`);

}




