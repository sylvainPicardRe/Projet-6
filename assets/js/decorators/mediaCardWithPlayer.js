function mediaCardWithPlayer(mediaCard) {
    mediaCard.$wrapper.addEventListener('click', () => {
        const Player = new PlayerModal(mediaCard.media)
        Player.render()
    })
    
    return mediaCard
}