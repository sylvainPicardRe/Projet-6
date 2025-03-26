class ProxyRatingSorter {
  // Le constructeur initialise un tableau vide pour le cache
  constructor() {
    this.cache = []
  }

  // Méthode asynchrone pour trier les médias selon un ordre spécifié
  async sorter(medias, orderBy) {
    const cacheResult = this.cache.find((elt) => elt.key === orderBy)

    if (cacheResult) {
      console.log('get from cache')
      return cacheResult
    }

    const data = await RatingSorterApi.sorter(medias, orderBy)

    this.cache.push(data)
    return data
  }
}
