class Lightbox {
  constructor(medias) {
    this.medias = medias
    this.currentIndex = 0

    this.$modal = document.querySelector('.modal')

    this.lightboxElement = this.createLightboxElement()
    this.$modal.appendChild(this.lightboxElement)
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

  open(index) {
    this.currentIndex = index
    this.updateMedia()
    this.$modal.style.display = 'block'
  }

  close() {
    this.$modal.style.display = 'none'
    this.$modal.style.display = 'none'
    this.$modal.innerHTML = ''
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.medias.length
    this.updateMedia()
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.medias.length) % this.medias.length
    this.updateMedia()
  }

  updateMedia() {
    const media = this.medias[this.currentIndex]
    const content = this.lightboxElement.querySelector('.lightbox-content')

    content.innerHTML = '' // On vide le contenu précédent

    content.innerHTML = `${media.mediaModal}`
  }

  addEventListeners() {
    this.lightboxElement
      .querySelector('.lightbox-close')
      .addEventListener('click', () => this.close())

    this.lightboxElement
      .querySelector('.lightbox-next')
      .addEventListener('click', () => this.next())

    this.lightboxElement
      .querySelector('.lightbox-prev')
      .addEventListener('click', () => this.prev())

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') this.next()
      if (e.key === 'ArrowRight') console.log('ici')
      if (e.key === 'ArrowLeft') this.prev()
      if (e.key === 'Escape') this.close()
    })
  }
}
