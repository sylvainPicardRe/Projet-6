class App {
  constructor() {
    if (window.location.pathname.includes('photographer.html')) {
      this._url = '../data/photographers.json'
      this.MediasApi = new MediaApi(this._url)
      this.$photographerWrapper = document.querySelector(
        '.photographer-wrapper',
      )
      this.$mediasWrapper = document.querySelector('.medias-wrapper')
      this.$infosWrapper = document.querySelector('.infos-wrapper')

      // Like Pub/sub
      this.LikeSubject = new LikeSubject()
      this.LikeCounter = new LikeCounter()

      this.LikeSubject.subscribe(this.LikeCounter)
    } else {
      this.$photographersWrapper = document.querySelector(
        '.photographers-wrapper',
      )
      this.MediasApi = null
      this._url = './assets/data/photographers.json'
    }

    this.PhotographersApi = new PhotographerApi(this._url)
  }

  async main() {
    const photographersData = await this.PhotographersApi.getPhotographers()

    if (this.MediasApi) {
      document.querySelector('.likes-count').innerHTML = this.LikeCounter.count
      const url = new URL(window.location.href)
      const params = new URLSearchParams(url.search)
      const pId = parseInt(params.get('pId'))

      const photographerData =
        await this.PhotographersApi.getPhotographerId(pId)

      const photographer = new Photographer(photographerData)

      const mediasData = await this.MediasApi.getMedias()

      const Medias = mediasData
        .filter((media) => media.photographerId === pId)
        .map((media) => new MediasFactory(media))

      const Sorter = new SorterForm(Medias)
      Sorter.render()

      const Template = new PhotographerContactCard(photographer)
      this.$photographerWrapper.appendChild(
        Template.createPhotographerContactCard(),
      )

      let likes = 0

      Medias.forEach((media, index) => {
        const Template = new MediaCard(media, this.LikeSubject, index)
        this.$mediasWrapper.appendChild(Template.createMediaCard())
        likes += media.likes

        // Ouvrir la lightbox au clic sur une image
        Template.createMediaCard().addEventListener('click', () => {
          const lightbox = new Lightbox(Medias)
          lightbox.open(index)
        })
      })

      this.LikeCounter.count = likes
      console.log(this.LikeCounter.count)
      document.querySelector('.price-wapper').innerHTML =
        `${photographer._price}€/jour`

      contactForm(photographer)
    } else {
      photographersData
        .map((photographer) => new Photographer(photographer))
        .forEach((photographer) => {
          const Template = new PhotographerCard(photographer)
          this.$photographersWrapper.appendChild(
            Template.createPhotographerCard(),
          )
        })
    }
  }
}

const app = new App()
app.main()
