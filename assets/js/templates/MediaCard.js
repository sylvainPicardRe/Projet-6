class MediaCard {
    constructor(media, LikeSubject) {
        this._media = media
        this.LikeSubject = LikeSubject

        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('media-card-wrapper')

        this.$mediaSrc = document.createElement('div')
        this.$mediaSrc.classList.add('media-src')
    }

    get media() {
        return this._media
    }

    handleLikeButton() {
        const that = this
        
        let likesCount = this.$wrapper.querySelector('.likes-count')
        let likeCountValue = parseInt(this.$wrapper.querySelector('.likes-count').innerHTML)

        this.$wrapper
            .querySelector('.like-btn')
            .addEventListener('click', function() {
                if(this.classList.contains('fa-solid')) {
                    this.classList.remove('fa-solid')
                    this.classList.add('fa-regular')
                    likeCountValue -= 1
                    that.LikeSubject.fire('DEC')
                } else {
                    this.classList.add('fa-regular')
                    this.classList.add('fa-solid')
                    likeCountValue += 1
                    that.LikeSubject.fire('INC')
                }

                likesCount.innerHTML = likeCountValue
            })
    }

    createMediaCard() {

        this.$mediaSrc.innerHTML = this._media.media;

        const MediaCard = `
        <div class="media-card">
        ${this.$mediaSrc.outerHTML}
        <div class="media-card-content">
        <h3 class="media-title">${this._media.title}</h3>
        <div class="likes">
        <p class="likes-count">${this._media.likes}</p>
        <i class="fa-regular fa-heart like-icon like-btn"></i>
        </div>
        </div>
        </div>
        `
        
        this.$wrapper.innerHTML = MediaCard
        this.handleLikeButton()
        mediaCardWithPlayer(this.$wrapper, this._media)
        return this.$wrapper
    }
}