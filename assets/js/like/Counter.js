class LikeCounter {
  // Le constructeur initialise le compteur à 0 et sélectionne l'élément DOM pour afficher le nombre de likes
  constructor() {
    this._count = 0
    this._$likeCount = document.querySelector('.likes-count')
  }

  // Définition du setter pour 'count' qui met à jour le compteur et l'affichage
  set count(countValue) {
    this._count = countValue
    this._$likeCount.innerHTML = this._count
  }

  // Définition du getter pour 'count' qui retourne la valeur actuelle du compteur
  get count() {
    return this._count
  }

  // Méthode pour mettre à jour le compteur en fonction de l'action ('INC' pour incrémenter, 'DEC' pour décrémenter)
  update(action) {
    if (action === 'INC') {
      this._count += 1
    } else if (action === 'DEC') {
      this._count -= 1
    } else {
      throw 'Unknow action'
    }

    this._$likeCount.innerHTML = this._count
  }
}
