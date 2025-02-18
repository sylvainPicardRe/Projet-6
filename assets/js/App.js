class App {
    constructor() {
        
        if(window.location.pathname.includes('photographer.html')){
            this._url = '../data/photographers.json'
            this.MediasApi = new MediaApi(this._url)
            this.$photographerWrapper = document.querySelector('.photographer-wrapper')
            this.$mediasWrapper = document.querySelector('.medias-wrapper')
        } else {
            this.$photographersWrapper = document.querySelector('.photographers-wrapper')
            this.MediasApi = null
            this._url = './assets/data/photographers.json'
        }
        
        this.PhotographersApi = new PhotographerApi(this._url)   
    }
    
    async main() {
        
        const photographersData = await this.PhotographersApi.getPhotographers()
        
        if(this.MediasApi) {

            const url = new URL(window.location.href)
            const params = new URLSearchParams(url.search)
            const pId = parseInt(params.get('pId'))

            const photographerData = await this.PhotographersApi.getPhotographerId(pId)

            const photographer = new Photographer(photographerData)

            const mediasData = await this.MediasApi.getMedias()

            const Template = new PhotographerContactCard(photographer)
            this.$photographerWrapper.appendChild(
                Template.createPhotographerContactCard()
            )

            mediasData
            .filter(media => media.photographerId === pId)
            .map(media => new MediasFactory(media))
            .forEach(media => {
                const Template = new MediaCard(media)
                this.$mediasWrapper.appendChild(
                    Template.createMediaCard()
                )
            })

        } else {
            photographersData
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                const Template = new PhotographerCard(photographer)
                this.$photographersWrapper.appendChild(
                Template.createPhotographerCard()
                )
            })
        }
            
        
        
        
    }
}

const app = new App()
app.main() 