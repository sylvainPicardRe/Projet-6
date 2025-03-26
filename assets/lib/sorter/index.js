class RatingSorterApi {
  // Méthode statique asynchrone 'sorter' pour trier les données selon un critère spécifié
  static async sorter(data, orderBy) {
    console.log('Get from compute')
    // Vérification du critère de tri 'popular'
    if (orderBy === 'popular') {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = {
            key: orderBy,
            data: Array.from(data).sort((a, b) => b.likes - a.likes),
          }

          resolve(result)
        }, 1000)
      })
      // Vérification du critère de tri 'date'
    } else if (orderBy === 'date') {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = {
            key: orderBy,
            data: Array.from(data).sort(
              (a, b) => new Date(b.date) - new Date(a.date),
            ),
          }

          resolve(result)
        }, 1000)
      })
      // Vérification du critère de tri 'title'
    } else if (orderBy === 'title') {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = {
            key: orderBy,
            data: Array.from(data).sort((a, b) =>
              a.title.localeCompare(b.title),
            ),
          }

          resolve(result)
        }, 1000)
      })
    }
  }
}
