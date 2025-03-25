function mediaCardWithPlayer(element, media) {
  element.querySelector('.media-src').addEventListener('click', () => {
    const Player = new PlayerModal(media)
    Player.render()
  })
}
