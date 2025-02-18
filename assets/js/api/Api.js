class Api {
    /**
     * 
     * @param {string} url
     */

    constructor(url) {
        this._url = url
    }
    
    async get(key) {
        return fetch(this._url)
            .then(res => res.json() 
            .then(res => res[key])
            .catch(err => console.log('an error occurs', err))
        )
    }

    async getById(datas, id) {
        const data = datas.find(data => data.id === id)
        return data 
    }
}

class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url
     */

    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        return await this.get('photographers')
    }

    async getPhotographerId(pId) {
        const photographers = await this.get('photographers')
        return await this.getById(photographers, pId)
    }
}

class MediaApi extends Api {
    /**
     * 
     * @param {string} url
     */

    constructor(url) {
        super(url)
    }

    async getMedias() {
        return await this.get('media')
    }
}