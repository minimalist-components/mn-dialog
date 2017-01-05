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

    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', () => this.open()))
  }

  setCloseEvents() {
    const buttons = document.querySelectorAll('[close-dialog]')

    Array
      .from(buttons)
      .forEach(button => button.addEventListener('click', () => this.close()))

    document.addEventListener('keyup', () => {
      const esc = event.keyCode === 27

      if (esc) {
        this.close()
      }
    })

    this.addEventListener('click', event => {
      const clickOutside = !event.target.closest('.mn-card')

      if (clickOutside) {
        this.close()
      }
    })
  }

  open() {
    this.scrollTop = 0
    window.MnBackdrop.show()
    document.body.classList.add('mn-dialog-visible')

    const previousDialog = document.querySelector('mn-dialog.visible')
    if (previousDialog) {
      previousDialog.classList.remove('visible')
    }
    this.classList.add('visible')
  }

  close() {
    window.MnBackdrop.hide()
    document.body.classList.remove('mn-dialog-visible')
    this.classList.remove('visible')
  }
}

window.customElements.define('mn-dialog', MnDialog)
