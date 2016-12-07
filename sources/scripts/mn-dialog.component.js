let openButtons = document.querySelectorAll('[data-open-dialog]')
let closeButtons = document.querySelectorAll('[data-close-dialog]')
let body = document.querySelector('body')

// events
Array
  .from(openButtons)
  .forEach(button => button.addEventListener('click', open))

Array
  .from(closeButtons)
  .forEach(button => button.addEventListener('click', close))

body.addEventListener('click', hideDialog)
document.addEventListener('keyup', escapeKeyUp)

function open(event) {
  const target = event.target.getAttribute('data-open-dialog')
  const id = target === 'data-open-dialog'
    ? ''
    : `#${target}`

  let dialog = document.querySelector(`.mn-dialog${id}`)
  body.classList.add('mn-dialog-opened')
  dialog.classList.add('opened')
}

function close() {
  let dialog = document.querySelector('.mn-dialog.opened')
  body.classList.remove('mn-dialog-opened')
  dialog.classList.remove('opened')
}

function hideDialog(event) {
  if (event.target.classList.contains('mn-dialog-opened')) {
    close()
  }
}

function escapeKeyUp(event) {
  let esc = event.keyCode === 27
  let dialogOpened = body.classList.contains('mn-dialog-opened')
  if (esc && dialogOpened) {
    close()
  }
}
