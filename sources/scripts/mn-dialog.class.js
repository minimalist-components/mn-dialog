class MnDialog extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.setCard()
    this.setOpenEvents()
    this.setCloseEvents()

    return self
  }

  static clickOutside(value) {
    const dialogs = document.querySelectorAll('mn-dialog')
    this.clickOutsideDisabled = !value

    Array
      .from(dialogs)
      .forEach(dialog => {
        this.clickOutsideDisabled
          ? dialog.classList.add('disable-click-outside')
          : dialog.classList.remove('disable-click-outside')
      })
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
        'padding-title',
        'padding'
      ]

      const isValidClass = validClasses.indexOf(cssClass) > -1

      return isValidClass
    }
  }

  setOpenEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`button[open-dialog="${this.id}"]`)) {
        this.open()
        event.stopPropagation()
      }
    })
  }

  setCloseEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('button[close-dialog]')) {
        this.close()
        event.stopPropagation()
      }
    })

    document.addEventListener('keyup', event => {
      const esc = event.keyCode === 27

      if (esc) {
        this.close()
      }
    })

    this.addEventListener('click', event => {
      const clickOutside = !event.target.closest('.mn-card')
      const clickOutsideDisabled = this.classList.contains('disable-click-outside')

      if (clickOutside && !clickOutsideDisabled) {
        this.close()
      }
    })
  }

  open() {
    this.scrollTop = 0
    window.MnBackdrop.show({target: this})
    document.body.classList.add('mn-dialog-visible')

    const previousDialog = document.querySelector('mn-dialog.visible')
    if (previousDialog) {
      previousDialog.classList.remove('visible')
    }
    this.classList.add('visible')
  }

  close() {
    window.MnBackdrop.hide({target: this})
    document.body.classList.remove('mn-dialog-visible')
    this.classList.remove('visible')
  }
}

window.customElements.define('mn-dialog', MnDialog)
window.MnDialog = MnDialog
