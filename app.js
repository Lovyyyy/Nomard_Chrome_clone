const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function loginClick () {
 console.log('click')
} 

loginButton.addEventListener('click', loginClick)