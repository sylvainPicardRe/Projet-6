class Lightbox {
  // Le constructeur prend en paramètre un tableau d'objets média à afficher
  constructor(medias) {
    this.medias = medias // Stocke le tableau de médias
    this.currentIndex = 0 // Initialise l'index du média courant à 0

    //Elements du DOm
    this.$modal = document.querySelector('.modal')
    this.$lightboxElement = this.createLightboxElement()
    this.$modal.appendChild(this.$lightboxElement)

    //Ajoute les écouteurs d'événements pour les interactions utilisateur
    this.addEventListeners()
  }

  createLightboxElement() {
    const lightbox = document.createElement('div')
    lightbox.classList.add('lightbox-wrapper')
    lightbox.innerHTML = `
        <div class="lightbox-btns">
        <button class="lightbox-prev">&#10094;</button>
        <button class="lightbox-close">&times;</button>
        <button class="lightbox-next">&#10095;</button>
        </div>
        <div class="lightbox-content"></div>
      `
    return lightbox
  }

  //Méthode pour ouvrir la lightbox à un index donné
  open(index) {
    this.currentIndex = index
    this.updateMedia()
    this.$modal.style.display = 'block'
  }

  //Méthode pour fermer la lightbox
  close() {
    this.$modal.style.display = 'none'
    this.$modal.innerHTML = ''
  }

  // Méthode pour afficher le média suivant
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.medias.length
    this.updateMedia()
  }

  // Méthode pour afficher le média précédent
  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.medias.length) % this.medias.length
    this.updateMedia()
  }

  // Méthode pour mettre à jour le contenu affiché dans la lightbox
  updateMedia() {
    const media = this.medias[this.currentIndex]
    const content = this.$lightboxElement.querySelector('.lightbox-content')

    content.innerHTML = '' // Je vide le contenu précédent

    content.innerHTML = `${media.mediaModal}`
  }

  // Méthode pour ajouter les écouteurs d'événements pour les interactions utilisateur
  addEventListeners() {
    this.$lightboxElement
      .querySelector('.lightbox-close')
      .addEventListener('click', () => this.close())

    this.$lightboxElement
      .querySelector('.lightbox-next')
      .addEventListener('click', () => this.next())

    this.$lightboxElement
      .querySelector('.lightbox-prev')
      .addEventListener('click', () => this.prev())

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') this.next()
      if (e.key === 'ArrowLeft') this.prev()
      if (e.key === 'Escape') this.close()
    })
  }
}
