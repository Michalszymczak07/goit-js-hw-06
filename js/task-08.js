const form = document.querySelector(".login-form");
const input = document.getElementsByTagName('input');
const button = document.getElementsByTagName('button');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("please fill in all the fields");
}


    console.log(email.value, password.value);
    event.currentTarget.reset();
    
});

