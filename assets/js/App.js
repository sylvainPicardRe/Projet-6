class App {
  // Le constructeur initialise les propriétés de l'application
  constructor() {
    // vérifie si l'URL actuelle contient 'photographer.html'
    if (window.location.pathname.includes('photographer.html')) {
      // Définit l'URL du fichier JSON contenant les données des photographes
      this._url = '../data/photographers.json'

      // Créer une instance de MediaApi pour gérer les médias
      this.MediasApi = new MediaApi(this._url)

      // Sélectionne les éléments du DOM où les données seront affichées
      this.$photographerWrapper = document.querySelector(
        '.photographer-wrapper',
      )
      this.$mediasWrapper = document.querySelector('.medias-wrapper')
      this.$infosWrapper = document.querySelector('.infos-wrapper')

      // Like Pub/sub
      this.LikeSubject = new LikeSubject()
      this.LikeCounter = new LikeCounter()

      //Abonne le compteur de likes au sujet des likes
      this.LikeSubject.subscribe(this.LikeCounter)
    } else {
      //Si ce n'est pas 'photographer.html', définit l'URL pour la liste des photographes
      this.$photographersWrapper = document.querySelector(
        '.photographers-wrapper',
      )
      this._url = './assets/data/photographers.json'
    }

    //Crée une instance de PhotographerApi pour gérer les données des photographes
    this.PhotographersApi = new PhotographerApi(this._url)
  }

  //Méthode principale pour initialiser et afficher les données
  async main() {
    //Récupère les données des photographes
    const photographersData = await this.PhotographersApi.getPhotographers()

    //Si MediaApi est défni
    if (this.MediasApi) {
      //Affiche le nombre total de likes
      document.querySelector('.likes-count').innerHTML = this.LikeCounter.count

      //Récupère l'ID du photographe à partir des paramètres d'URL
      const url = new URL(window.location.href)
      const params = new URLSearchParams(url.search)
      const pId = parseInt(params.get('pId'))

      //Récupère les données spécifique d'un photographe
      const photographerData =
        await this.PhotographersApi.getPhotographerId(pId)

      //Crée une instance de Photographer avec les données récupérées
      const photographer = new Photographer(photographerData)

      //Récupère les données des médias
      const mediasData = await this.MediasApi.getMedias()

      // Filtre les médias correspondant au photographe et crée les objets média
      const Medias = mediasData
        .filter((media) => media.photographerId === pId)
        .map((media) => new MediasFactory(media))

      //Crée et affiche le formulaire de tri des médias
      const Sorter = new SorterForm(Medias)
      Sorter.render()

      //Crée et affiche la carte de contact du photographe
      const Template = new PhotographerContactCard(photographer)
      this.$photographerWrapper.appendChild(
        Template.createPhotographerContactCard(),
      )

      let likes = 0

      //Pour chaque média, crée et affiche la carte correspondante
      Medias.forEach((media, index) => {
        const Template = new MediaCard(media, this.LikeSubject, index)
        this.$mediasWrapper.appendChild(Template.createMediaCard())
        likes += media.likes

        // Ouvrir la lightbox au clic sur le média
        Template.getMedia().addEventListener('click', () => {
          const lightbox = new Lightbox(Medias)
          lightbox.open(index)
        })
      })

      this.LikeCounter.count = likes
      document.querySelector('.price-wapper').innerHTML =
        `${photographer._price}€/jour`
      //Affiche le formulaire de contact
      contactForm(photographer)
    } else {
      // Si ce n'est pas pas la page 'photographer.html' affiche la liste des photographe
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

//Crée une instance de l'application
const app = new App()
app.main()
