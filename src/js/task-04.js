let counterValue = 0;


const subtraction = document.querySelector('button');

const div = document.getElementById('counter')

const addition = div.lastElementChild;

console.log(subtraction);
console.log(addition);




function add() {
    counterValue++;
    document.getElementById("value").textContent = counterValue;
}


function sub() {
  counterValue--;
  document.getElementById("value").textContent = counterValue;
}



subtraction.addEventListener('click', sub);
addition.addEventListener('click', add);