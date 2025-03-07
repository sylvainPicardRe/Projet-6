class LikeCounter {
    constructor() {
        this._count = 0
        this._$likeCount = document.querySelector('.likes-count')
    }

    set count(countValue) {
        this._count = countValue
        this._$likeCount.innerHTML = this._count
    }
 
    get count() {
        return this._count
    }

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