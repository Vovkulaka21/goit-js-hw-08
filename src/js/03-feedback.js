import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formRef = {
  email: document.querySelector('.feedback-form').email,
  message: document.querySelector('.feedback-form').message,
  form: document.querySelector('.feedback-form'),
};

let formData = {};

formRef.form.addEventListener('input', throttle(onInput, 500));
formRef.form.addEventListener('submit', onSubmitForm);

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log(formData);
}

function populateForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    try {
      FormData = JSON.parse(savedMessage);
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
}

populateForm();
