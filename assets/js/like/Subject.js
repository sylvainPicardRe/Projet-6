class LikeSubject {
    constructor() {
        this._observers = []

    }

    subscribe(observer) {
        this._observers.push(observer)
    }

    unsubscribe(observer) {
        this._observers = this._observers.filter(obs => obs !== observer)
    }

    fire(action) {
        console.log(action)
        this._observers.forEach(observer => observer.update(action))
    }
}