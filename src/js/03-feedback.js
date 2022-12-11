

const throttle = require("lodash.throttle");

const formRef = document.querySelector('.feedback-form');
const textRef = document.querySelector('textarea');

formRef.addEventListener('submit', onFormSubmit);
textRef.addEventListener('input', throttle(textareaInput, 1000));

const LOCAL_KEY = 'feedback-form-state';

function onFormSubmit(evt) {
  evt.preventDefault();
   console.log('Storage:', JSON.parse(localStorage.getItem(LOCAL_KEY)));
  localStorage.removeItem(LOCAL_KEY);
  evt.target.reset();
}

function textareaInput(evt) {
  const message = evt.target.value
  localStorage.setItem(LOCAL_KEY, JSON.stringify(message));
  
}

function textareaValue() {
   const saveMessage = JSON.parse(localStorage.getItem(LOCAL_KEY));
    
   if(saveMessage) {
     console.log(saveMessage);
  textRef.value = saveMessage;
}
}
textareaValue()

