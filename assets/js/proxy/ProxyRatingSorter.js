class ProxyRatingSorter {
  constructor() {
    this.cache = []
  }

  async sorter(medias, orderBy) {
    const cacheResult = this.cache.find((elt) => elt.key === orderBy)

    if (cacheResult) {
      console.log('get from cache')
      return cachedResult
    }

    const data = await RatingSorterApi.sorter(medias, orderBy)

    this.cache.push(data)
    return data
  }
}
