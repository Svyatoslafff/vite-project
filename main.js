import './style.css'
import { adding as sum, library } from '../my-library'
// import * as libr from '../my-library'
import validator from "validator" 


const emailForm = {
  form: document.querySelector(".email-submit-form"),
  input: document.querySelector(".email-submit-form input"),
  validateEmail(event) {
    event.preventDefault();
    if (validator.isEmail(emailForm.input.value)) {
      console.log(emailForm.input.value);
    } else {
      alert(`${emailForm.input.value} isn't email`);
    }
  }
};

emailForm.form.addEventListener('submit', emailForm.validateEmail);


const menu = {
  menuButton: document.querySelector("button[data-menu]"),
  menuContainer: document.querySelector(".menu"),
  toggleMenu() {
    menu.menuContainer.classList.toggle("active-menu");
  }
}

menu.menuButton.addEventListener('click', menu.toggleMenu);
