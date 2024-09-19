const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navBar = document.getElementById("navBar");

if (bar) {
  bar.addEventListener("click", () => {
    navBar.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
}

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
form.addEventListener("submit", (e) => {
  if (name.value === "" || name.value === Null) {
    e.preventDefault();
    name_error.innerHTML = "Name is required";
  } else {
    name_error.innerHTML = "";
  }

  if (email.value === "" || email.value === Null) {
    e.preventDefault();
    email_error.innerHTML = "Email is required";
  } else {
    email_error.innerHTML = "";
  }
  if (password.value === "" || password.value === Null) {
    e.preventDefault();
    password_error.innerHTML = "Input cannot be empty";
  } else {
    password_error.innerHTML = "";
  }
});
