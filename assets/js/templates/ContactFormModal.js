class ContactFormModal {
  constructor(photographer) {
    this._photographer = photographer

    this.$body = document.querySelector('body')
    this.$body.style.overflow = 'hidden'

    this.$wrapper = document.createElement('div')
    this.$wrapper.classList.add('contactForm-wrapper')

    this.$modalWrapper = document.querySelector('.modal')
  }

  onSubmit() {
    const firstName = this.$wrapper.querySelector('#first')
    const lastName = this.$wrapper.querySelector('#last')
    const email = this.$wrapper.querySelector('#email')
    const message = this.$wrapper.querySelector('#message')

    this.$wrapper.querySelector('.contact').addEventListener('submit', (e) => {
      e.preventDefault()

      if (firstName.value === '') {
        firstName.parentElement.lastElementChild.classList.remove('hidden')
      } else {
        firstName.parentElement.lastElementChild.classList.add('hidden')
      }
      if (lastName.value === '') {
        lastName.parentElement.lastElementChild.classList.remove('hidden')
      } else {
        lastName.parentElement.lastElementChild.classList.add('hidden')
      }
      if (email.value === '') {
        email.parentElement.lastElementChild.classList.remove('hidden')
      } else {
        email.parentElement.lastElementChild.classList.add('hidden')
      }
      if (message.value === '') {
        message.parentElement.lastElementChild.classList.remove('hidden')
      } else {
        message.parentElement.lastElementChild.classList.add('hidden')
      }

      if (
        (firstName.value !== '' && lastName.value !== '' && email.value !== '',
        message.value !== '')
      ) {
        console.log('Prénom:', firstName.value)
        console.log('Nom:', lastName.value)
        console.log('Email:', email.value)
        console.log('Message:', message.value)
        this.closeModal()
      }
    })
  }

  closeModal() {
    this.$body.style.overflow = 'initial'
    this.$modalWrapper.style.display = 'none'
    this.$modalWrapper.setAttribute('aria-hidden', 'true')
    this.$wrapper.style.display = 'none'
    this.$wrapper.innerHTML = ''
  }

  onCloseButton() {
    this.$wrapper.querySelector('.close-btn').addEventListener('click', () => {
      this.$body.style.overflow = 'initial'
      this.$modalWrapper.style.display = 'none'
      this.$modalWrapper.setAttribute('aria-hidden', 'true')
      this.$wrapper.style.display = 'none'
      this.$wrapper.innerHTML = ''
    })
  }

  createContactForm() {
    const contactForm = `
            <h1>Contactez-moi <br>${this._photographer.name}</h1>
            <button class="close-btn" aria-label="Fermer"><i class="fa-solid fa-x"></i></button>
            <form action="#" method="get" class="contact">
                <div class="field">
                    <label for="first">Prénom</label>
                    <input type="text" id="first" aria-label="Prénom" aria-required="true"/>
                    <span class="error hidden">Le champ Prénom est requis</span>
                </div>
                <div class="field">
                    <label for="last">Nom</label>
                    <input type="text" id="last" aria-label="Nom" aria-required="true"/>
                    <span class="error hidden">Le champ Nom est requis</span>
                </div>
                <div class="field">
                    <label for="email">Email</label>
                    <input type="email" id="email" aria-label="Email" aria-required="true"/>
                    <span class="error hidden">Le champ Email</span>
                </div>
                <div class="field">
                    <label for="message">Votre message</label>
                    <textarea id="message" rows="5" cols="33" aria-label="Message" aria-required="true"></textarea>
                    <span class="error hidden">Le champ Message est requis</span>
                </div>
                <button class="contact-button submit" type="submit" aria-label="Soumettre le formulaire de contact">Envoyer</button>
            </form>
        `

    this.$wrapper.innerHTML = contactForm

    this.$modalWrapper.style.display = 'block'
    this.$modalWrapper.setAttribute('aria-hidden', 'false')
    this.$modalWrapper.appendChild(this.$wrapper)

    this.onCloseButton()
    this.onSubmit()
  }

  render() {
    this.createContactForm()
  }
}
