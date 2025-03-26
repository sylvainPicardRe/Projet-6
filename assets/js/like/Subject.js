class LikeSubject {
  // Le constructeur initialise un tableau vide pour stocker les observateurs
  constructor() {
    this._observers = []
  }

  // Méthode pour ajouter un observateur à la liste
  subscribe(observer) {
    this._observers.push(observer)
  }

  // Méthode pour retirer un observateur de la liste
  unsubscribe(observer) {
    this._observers = this._observers.filter((obs) => obs !== observer)
  }

  // Méthode pour notifier tous les observateurs d'une action
  fire(action) {
    console.log(action)
    this._observers.forEach((observer) => observer.update(action))
  }
}
