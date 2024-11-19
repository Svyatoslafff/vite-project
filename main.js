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


// library.logSmth(sum(123, 5345, '223'), 'fsdfsdf', 43);
// libr.library.logSmth("dasdas");

emailForm.form.addEventListener('submit', emailForm.validateEmail);