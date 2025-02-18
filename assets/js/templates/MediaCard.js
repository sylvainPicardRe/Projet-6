class MediaCard {
    constructor(media) {
        this._media = media

        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('media-card-wrapper')
    }

    get media() {
        return this._media
    }

    createMediaCard() {
        const MediaCard = `
            <div class="media-card">
                ${this._media.media}
                <div class="media-card-content">
                    <h3 class="media-title">${this._media.title}</h3>
                    <div class="likes">
                        <p>${this._media.likes}</p>
                        <i class="fa-solid fa-heart like-icon"></i>
                    </div>
                </div>
            </div>
        `
        this.$wrapper.innerHTML = MediaCard
        return this.$wrapper
    }
}