class PhotographerContactCard {
  constructor(photographer) {
    this._photographer = photographer
  }

  createPhotographerContactCard() {
    const $wrapper = document.createElement('div')
    $wrapper.classList.add('photographer-card-contact-wrapper')

    const photographerCard = `
            <div class="photographer-contact-card">
                <div>
                    <h1 class="photographer-name">${this._photographer.name}</h1>
                    <p class="photographer-location">${this._photographer.city}, ${this._photographer.country}</p>
                    <p class="photographer-tagline">${this._photographer.tagline}</p>
                </div>
                <button class="contact-button" aria-label="Ouvrir le formulaire de contact">Contactez-moi</button>
                <div>
                    <img src="${this._photographer.portrait}" class="photographer-image" alt="${this._photographer.name}">
                </div>
            </div>
        `

    $wrapper.innerHTML = photographerCard
    return $wrapper
  }
}
