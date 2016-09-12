'use strict';

let buttons = document.querySelectorAll('[data-toggle-dialog]');
let dialog = document.querySelector('.mn-dialog');
let body = document.querySelector('body');

// events
Array
  .from(buttons)
  .forEach(button => button.addEventListener('click', toggle));
body.addEventListener('click', hideDialog);
document.addEventListener('keyup', escapeKeyUp);

// init motion blur
setMotionBlur();

function toggle() {
  body.classList.toggle('mn-dialog-opened');
  dialog.classList.toggle('opened');
}

function close() {
  body.classList.remove('mn-dialog-opened');
  dialog.classList.remove('opened');
}

function hideDialog(event) {
  if (event.target.classList.contains('mn-dialog-opened')) {
    close();
  }
}

function escapeKeyUp(event) {
  let esc = event.keyCode === 27;
  let dialogOpened = body.classList.contains('mn-dialog-opened');
  if (esc && dialogOpened) {
    close();
  }
}

function setMotionBlur() {
  let blur = document.querySelector('#motion-blur'); // the blur filter
  let blurFilter = blur.firstElementChild;

  let lastPos = getOffset(dialog);
  let multiplier = 0.25;

  updateMotionBlur();

  function setBlur(x,y){
    blurFilter.setAttribute('stdDeviation', `${x},${y}`);
  }

  function getOffset (el) {
    const box = el.getBoundingClientRect();

    return {
      top: box.top + window.pageYOffset - document.documentElement.clientTop,
      left: box.left + window.pageXOffset - document.documentElement.clientLeft
    };
  }

  function updateMotionBlur() {
    // get the current position of the element
    let currentPos = getOffset(dialog);

    // calculate the changes from the last frame and apply the multiplier
    let xDiff = Math.abs(currentPos.left - lastPos.left) * multiplier;
    let yDiff = Math.abs(currentPos.top - lastPos.top) * multiplier;

    // set the blur
    setBlur(xDiff,yDiff);
    lastPos = currentPos;

    requestAnimationFrame(updateMotionBlur);
  }
}
