/* globals $ */
'use strict';

let trigger = document.querySelector('.toggle-dialog');
let dialog = document.querySelector('.mn-dialog');
let body = document.querySelector('body');

trigger.addEventListener('click', toggle);
dialog.addEventListener('click', toggle);
setMotionBlur();

function toggle() {
  body.classList.toggle('mn-dialog-opened');
  dialog.classList.toggle('opened');
}

function setMotionBlur() {
  let blur = document.querySelector('#motion-blur'); // the blur filter
  let blurFilter = blur.firstElementChild;

  let $element = $('.mn-dialog');
  let lastPos = $element.offset();
  let multiplier = 0.25;

  updateMotionBlur();

  function setBlur(x,y){
    blurFilter.setAttribute('stdDeviation', `${x},${y}`);
  }

  function updateMotionBlur() {
    // get the current position of the element
    let currentPos = $element.offset();

    // calculate the changes from the last frame and apply the multiplier
    let xDiff = Math.abs(currentPos.left - lastPos.left) * multiplier;
    let yDiff = Math.abs(currentPos.top - lastPos.top) * multiplier;

    // set the blur
    setBlur(xDiff,yDiff);
    lastPos = currentPos;

    requestAnimationFrame(updateMotionBlur);
  }
}
