'use strict';

let trigger = document.querySelector('.show-dialog');
let dialog = document.querySelector('.mn-dialog');

trigger.addEventListener('click', showDialog);
dialog.addEventListener('click', hideDialog);

function showDialog() {
  dialog.classList.add('opened');
}

function hideDialog() {
  dialog.classList.remove('opened');
}
