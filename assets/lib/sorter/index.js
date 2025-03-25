class RatingSorterApi {
  static async sorter(data, orderBy) {
    console.log('Get from compute')

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
