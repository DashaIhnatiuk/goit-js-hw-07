const table = document.querySelector('ul#categories');
let categories;
if(table!=null){
    categories = table.querySelectorAll('.item');
    console.log("В списке " + categories.length + " категории.");
}

for(let item of categories){
    const title = item.querySelector('h2');
    if(title!=null){
        console.log("Категория: " + title.textContent);
    }

    const childlist = item.querySelectorAll('li');
    if(childlist!=null){
        console.log("Количество элементов: " + childlist.length);
    }
}
