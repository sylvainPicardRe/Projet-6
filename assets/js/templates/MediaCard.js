class MediaCard {
  constructor(media, LikeSubject, index, lightbox) {
    this._media = media
    this.LikeSubject = LikeSubject

    this._index = index
    this._lightbox = lightbox

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
    let likeCountValue = parseInt(
      this.$wrapper.querySelector('.likes-count').innerHTML,
    )

    this.$wrapper
      .querySelector('.like-btn')
      .addEventListener('click', function () {
        if (this.classList.contains('fa-solid')) {
          this.classList.remove('fa-solid')
          this.classList.add('fa-regular')
          this.setAttribute('aria-pressed', 'false')
          likeCountValue -= 1
          that.LikeSubject.fire('DEC')
        } else {
          this.setAttribute('aria-pressed', 'true')
          this.classList.add('fa-regular')
          this.classList.add('fa-solid')
          likeCountValue += 1
          that.LikeSubject.fire('INC')
        }

        likesCount.innerHTML = likeCountValue
      })
  }

  getMedia() {
    const mediaElement = this.$wrapper.querySelector('.media-src')
    return mediaElement
  }

  createMediaCard() {
    this.$mediaSrc.innerHTML = this._media.media

    const MediaCard = `
        <div class="media-card" data-id=${this._index}>
          ${this.$mediaSrc.outerHTML}
          <div class="media-card-content">
            <h2 class="media-title">${this._media.title}</h2>
            <div class="likes">
              <p class="likes-count">${this._media.likes}</p>
              <i class="fa-regular fa-heart like-icon like-btn" role="button" aria-pressed="false"></i>
            </div>
          </div>
        </div>
        `

    this.$wrapper.innerHTML = MediaCard
    this.handleLikeButton()
    return this.$wrapper
  }
}
