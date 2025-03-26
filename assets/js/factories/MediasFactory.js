class MediasFactory {
  // Le constructeur prend en paramètre 'data' contenant les informations  sur le média
  constructor(data) {
    // Vérifie si 'data' contient une clé 'image'
    if (data.image) {
      // Si 'image' est présent, on retourne une instance de la classe MediaImage avec les données passées en paramètre
      return new MediaImage(data)
    }
    // Vérifie si 'data' contient une clé 'video'
    else if (data.video) {
      // Si 'video' est présent, on retourne une instance de la classe MediaVideo avec les données passées en paramètre
      return new MediaVideo(data)
    }
    //Si ni 'image' ni 'video' ne sont présents dans 'data', une erreur est levée
    else {
      throw 'Unknow type format'
    }
  }
}
