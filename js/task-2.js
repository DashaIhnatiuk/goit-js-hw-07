const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredients_table = document.querySelector('ul#ingredients');


  let elements_array = [];
  for(let value of ingredients){
    const element = document.createElement('li');
    element.textContent = value;
    elements_array.push(element);
  }


ingredients_table.append(...elements_array);