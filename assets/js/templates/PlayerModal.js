class PlayerModal {
    constructor(media) {
        this.media = media

        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('player-wrapper')

        this.$modalWrapper = document.querySelector('.modal')
    }

    onCloseButton() {
        this.$wrapper
            .querySelector('.close-btn')
            .addEventListener('click', () => {
                this.$modalWrapper.classList.remove('modal-on')
                this.$wrapper.innerHTML = ""
            })
    }

    createPlayer() {
        const player = `
            <div class="player">
                <button class="previous"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="next"><i class="fa-solid fa-chevron-right"></i></button>
                ${this.media.mediaModal}
                <p class="media-title">${this.media.title}</p>
                <button class="close-btn"><i class="fa-solid fa-x"></i></button>
            </div>
        `

        this.$wrapper.innerHTML = player

        this.$modalWrapper.classList.add('modal-on')
        this.$modalWrapper.appendChild(this.$wrapper)

        this.onCloseButton()
    }

    render() {
        this.createPlayer()
    }
}