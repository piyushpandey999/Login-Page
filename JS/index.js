const form = document.myform;
const small = document.querySelectorAll("#small");
const small1 = small[0];
const small2 = small[1];
const username = document.getElementById("uname");
const password = document.getElementById("password");

form.addEventListener("submit", handle);

function handle(e) {
  e.preventDefault();
  checkinputs();
}
function checkinputs() {
  if (username.value === "") {
    setError(username, small1, "Please enter username or email");
  } else {
    removeError(username, small1);
  }
  if (password.value === "") {
    setError(password, small2, "please enter the password");
  } else {
    removeError(password, small2);
  }
}
function setError(element, text, errmsg) {
  element.classList.add("error");
  text.innerText = errmsg;
}
function removeError(element, text) {
  element.classList.remove("error");
  text.innerText = "";
}
