'use strict';
const formSection = document.querySelector('.form-secton-container');
const form = document.querySelector('.form');
const submitButton = form.querySelector('.submit');

const input1 = form.querySelector('#login');
input1.addEventListener('input', () => setDisabled());

const input2 = form.querySelector('#password');
input2.addEventListener('input', () => setDisabled());

const input3 = form.querySelector('#agree');
input3.addEventListener('input', () => setDisabled());

let isSubmit = () => !!(!!input1.value.length && !!input2.value.length && input3.checked);
const setDisabled = () =>
  isSubmit() ? submitButton.removeAttribute('disabled') : submitButton.setAttribute('disabled', '');

let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = 'Вы успешно авторизованы!';

form.onsubmit = async (e) => {
  e.preventDefault();
  formSection.replaceWith(div);
};
