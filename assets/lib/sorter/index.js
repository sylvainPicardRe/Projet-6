class RatingSorterApi {
    static async sorter(data, orderBy) {
        console.log(orderBy)
        console.log('Get from compute')

        if(orderBy === 'popular') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => a._likes - b._likes)
                    }

                    resolve(result)
                }, 1000)
            })
        } else if(orderBy === 'date') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => a.date - b.date)
                    }

                    resolve(result)
                }, 1000)
            })
        } else if(orderBy === 'title') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => a.title - b.title)
                    }

                    resolve(result)
                }, 1000)
            })
        }
    }
}