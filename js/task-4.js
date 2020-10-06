function increment(){
    counterValue+=1;
    span.textContent = counterValue;
}

function decrement(){
    counterValue-=1;
    span.textContent = counterValue;
}

let counterValue = 0;

const span = document.querySelector('span#value');
const add_btn = document.querySelector('[data-action="increment"]');
const minus_btn = document.querySelector('[data-action="decrement"]');;

if(add_btn!=null){
    add_btn.addEventListener('click', increment);
}

if(minus_btn!=null){
    minus_btn.addEventListener('click', decrement);
}

if(span!=null){
    counterValue = Number(span.textContent);
}

