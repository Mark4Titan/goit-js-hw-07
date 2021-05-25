const categories = document.querySelector('#categories');

console.log(`В списке ${categories.children.length} категории.`);

categories.querySelectorAll('.item').forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelector('ul').children.length}`,
  );
});
