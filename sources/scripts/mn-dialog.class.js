class MnDialog extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.setCard()
    this.setOpenEvents()
    this.setCloseEvents()
    return self
  }

  setCard() {
    const card = document.createElement('div')

    card.classList.add('mn-card')

    Array
      .from(this.classList)
      .filter(cardClass)
      // assign classes to card
      .forEach(cssClass => {
        this.classList.remove(cssClass)
        card.classList.add(cssClass)
      })

    Array
      .from(this.children)
      .forEach(putInCard)

    function putInCard(element) {
      card.appendChild(element)
    }

    this.insertBefore(card, this.firstChild)

    function cardClass(cssClass) {
      const validClasses = [
        'padding-header',
        'padding'
      ]

      const isValidClass = validClasses.indexOf(cssClass) > -1

      return isValidClass
    }
  }

  setOpenEvents() {
    const id = this.id
    const buttons = document.querySelectorAll(`button[open-dialog="${id}"]`)
    let openDialog = this.open

    Array
      .from(buttons)
      .forEach(setEventListener)

    function setEventListener(button) {
      button.addEventListener('click', (event) => {
        openDialog(event)
        event.stopPropagation()
      })
    }
  }

  setCloseEvents() {
    const buttons = document.querySelectorAll('[close-dialog]')
    const close = this.close

    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', close))

    document.addEventListener('keyup', () => {
      const esc = event.keyCode === 27
      let isVisible = document.body.classList.contains('mn-dialog-visible')
      if (esc && isVisible) {
        const dialog = document.querySelector('mn-dialog.visible')
        document.body.classList.remove('mn-dialog-visible')
        dialog.classList.remove('visible')
      }
    })

    document.addEventListener('click', event => {
      const clickOutside = !event.target.closest('mn-card')

      if (clickOutside) {
        this.close()
      }
    })
  }

  open(event) {
    let id
    let dialog

    if (event) {
      id = event.target.getAttribute('open-dialog')
      dialog = document.querySelector(`mn-dialog#${id}`)
    } else {
      dialog = this
    }

    window.MnBackdrop.show()
    document.body.classList.add('mn-dialog-visible')

    const previousDialog = document.querySelector('mn-dialog.visible')
    if (previousDialog) {
      previousDialog.classList.remove('visible')
    }
    dialog.classList.add('visible')
  }

  close(event) {
    if (event) {
      event.stopPropagation()
      const clickButtonClose = event.target.getAttribute('close-dialog')
      const clickOutside = event.target.tagName === 'MN-DIALOG'

      if (clickButtonClose || clickOutside) {
        const dialog = document.querySelector('mn-dialog.visible')
        window.MnBackdrop.hide()
        document.body.classList.remove('mn-dialog-visible')
        dialog.classList.remove('visible')
      }
    } else {
      const dialog = document.querySelector('mn-dialog.visible')
      if (dialog) {
        window.MnBackdrop.hide()
        document.body.classList.remove('mn-dialog-visible')
        dialog.classList.remove('visible')
      }
    }
  }
}

window.customElements.define('mn-dialog', MnDialog)
