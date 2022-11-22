import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener(
  'input',
  throttle(event => {
    const input = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(input));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;
  console.log({ email: email.value, message: message.value });

  event.currentTarget.reset();
  localStorage.clear();
});
const storageLocal = localStorage.getItem('feedback-form-state');

const StorageData = JSON.parse(storageLocal);

const feelInput = () => {
  if (StorageData !== null) {
    input.value = StorageData.email;
    textarea.value = StorageData.message;
  }
};

feelInput();
