class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer
  }

  createPhotographerCard() {
    const $wrapper = document.createElement('div')
    $wrapper.classList.add('photographer-card-wrapper')

    const photographerCard = `
            <div class="photographer-portrait">
                <a class="photographer-header" href="/assets/pages/photographer.html?pId=${this._photographer.id}" aria-label="Profil de ${this._photographer.name}">
                    <img class="photographer-image" src="${this._photographer.portrait}" alt="${this._photographer.name}">
                    <h2 class="photographer-name">${this._photographer.name}</h2>
                </a>
                <div class="photographer-infos" role="contentinfo">
                    <p class="photographer-location">${this._photographer.city}, ${this._photographer.country}</p>
                    <p>${this._photographer.tagline}</p>
                    <p class="photographer-price">${this._photographer.price}€/jour</p>
                </div>
            </div>
        `

    $wrapper.innerHTML = photographerCard
    return $wrapper
  }
}
