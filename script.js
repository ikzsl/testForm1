'use strict';
const formSection = document.querySelector('.form-secton-container');
const form = document.querySelector('.form');
const submitButton = form.querySelector('.submit');

const loginField = form.querySelector('#login');
loginField.addEventListener('input', () => setSubmitButtonStatus());

const passwordField = form.querySelector('#password');
passwordField.addEventListener('input', () => setSubmitButtonStatus());

const agreeCheckbox = form.querySelector('#agree');
agreeCheckbox.addEventListener('input', () => setSubmitButtonStatus());

let isSubmitButtonActive = () =>
  loginField.value.length && passwordField.value.length && agreeCheckbox.checked;

const setSubmitButtonStatus = () =>
  isSubmitButtonActive()
    ? submitButton.removeAttribute('disabled')
    : submitButton.setAttribute('disabled', '');

let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = 'Вы успешно авторизованы!';

form.onsubmit = async (e) => {
  e.preventDefault();
  formSection.replaceWith(div);
};
