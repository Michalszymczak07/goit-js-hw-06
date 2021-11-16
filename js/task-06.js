const input = document.getElementById("validation-input");


function correct() {
    if (input.value.length < 6) {
        input.style.borderColor = "#f44336";
    }  else  {
      input.style.borderColor = "#4caf50";
    }
}

input.addEventListener('blur', correct);