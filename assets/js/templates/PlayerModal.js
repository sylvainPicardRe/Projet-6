class PlayerModal {
  constructor(media, Medias) {
    this.media = media
    this.Medias = Medias
    console.log(Medias)

    this.$body = document.querySelector('body')
    this.$body.style.overflow = 'hidden'

    this.$wrapper = document.createElement('div')
    this.$wrapper.classList.add('player-wrapper')

    this.$modalWrapper = document.querySelector('.modal')
    this.$previous = document.querySelector('.previous')
    this.$previous = document.querySelector('.next')
  }

  onCloseButton() {
    this.$wrapper.querySelector('.close-btn').addEventListener('click', () => {
      this.$body.style.overflow = 'initial'
      this.$modalWrapper.classList.remove('modal-on')
      this.$wrapper.innerHTML = ''
    })
  }

  handlePreviousButton() {
    this.$wrapper.querySelector('.previous').addEventListener('click', () => {})
  }
  handleNextButton() {
    let currentindex = this.Medias.findIndex(
      (media) => media.id === this.media.id,
    )

    let nextMedia

    let mediaSrc = document.querySelector('.media-modal')
    console.log(mediaSrc)

    console.log(mediaSrc)

    let mediaTitle = document.querySelector('.media-modal-title')
    console.log(mediaTitle)

    this.$wrapper.querySelector('.next').addEventListener('click', () => {
      //   console.log(nextMedia)
      if (currentindex < this.Medias.length - 2) {
        currentindex += 1
        nextMedia = this.Medias[currentindex]
        mediaTitle.innerHTML = nextMedia.title
        if (nextMedia.video !== null) {
          mediaSrc.src = `../images/medias/${nextMedia.image}`
        } else {
          // mediaSrc.src = `../images/medias/${nextMedia.video}`
          console.log
          console.log('ici')
        }
      } else {
        currentindex = 0
        nextMedia = this.Medias[currentindex]
        // this.createPlayer(nextMedia)
      }
      //   this.createPlayer(nextMedia)
    })
  }

  createPlayer() {
    const player = `
            <div class="player">
                <button class="previous"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="next"><i class="fa-solid fa-chevron-right"></i></button>
                ${this.media.mediaModal}
                <p class="media-modal-title">${this.media.title}</p>
                <button class="close-btn"><i class="fa-solid fa-x"></i></button>
            </div>
        `

    this.$wrapper.innerHTML = player

    this.$modalWrapper.classList.add('modal-on')
    this.$modalWrapper.appendChild(this.$wrapper)

    this.onCloseButton()
    this.handlePreviousButton()
    this.handleNextButton()
  }

  render() {
    this.createPlayer()
  }
}
