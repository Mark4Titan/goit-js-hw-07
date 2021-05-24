const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// document.createElement()

const reffElement = document.querySelector('ul#ingredients');

const liArray = ingredients.map(с => {

    const newElementReff = document.createElement('li');
    newElementReff.textContent = с;
    return newElementReff;
    
});
  
  reffElement.append(...liArray);