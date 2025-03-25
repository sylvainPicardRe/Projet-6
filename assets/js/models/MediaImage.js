class MediaImage extends Media {
  constructor(data) {
    super(data)
    this._image = data.image
  }

  get media() {
    return `
            <img class="media-src" src="/assets/images/medias/${this._image}" alt="${super.title}">
        `
  }

  get mediaModal() {
    return `
            <img class="media-modal" src="/assets/images/medias/${this._image}" alt="${super.title}">
        `
  }
}
