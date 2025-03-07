function mediaCardWithPlayer(element, media) {

    element.querySelector('.media-src').addEventListener('click', () => {
        console.log('ici')
        const Player = new PlayerModal(media)
        Player.render()
    })
}