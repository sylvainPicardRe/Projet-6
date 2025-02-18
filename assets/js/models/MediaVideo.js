class MediaVideo extends Media {
    constructor(data) {
        super(data)
        this._video = data.video
    }

    get media() {
        return `
            <video class="media-src">
                <source src="/assets/images/medias/${this._video}" type="video/webm" />
            </video>
        `
    }
}