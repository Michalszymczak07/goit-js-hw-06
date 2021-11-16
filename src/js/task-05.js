let input = document.getElementById('name-input');
let output = document.getElementById("name-output");


 function name() {
 if (input.value === "") {
   output.textContent = "Anonymous";
 } else {
   output.textContent = input.value;
 }
}

input.addEventListener('input', name);