import { makeAutoObservable } from "mobx"

export default class PopularServicesStore{
    constructor() {
        this._serv = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

setServ(serv) {
    this._serv = serv
}
setPage(page) {
    this._page = page
}
setTotalCount(count) {
    this._totalCount = count
}

get serv(){
    return this._serv
}

get totalCount() {
    return this._totalCount
}
get page() {
    return this._page
}
get limit() {
    return this._limit
}
}