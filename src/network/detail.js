import {request} from "./request"
export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}
export class getGoods{
    constructor(itemInfo,columns,services,shopInfo){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
        this.shopName = shopInfo.name
        this.shopLogo = shopInfo.shopLogo
        this.cSell = shopInfo.cSells
        this.cGoods = shopInfo.cGoods
        this.shopScore = shopInfo.score
    }
}
export class getParams{
    constructor(info,rule) {
        this.out = info.set
        this.size = rule.tables[0]
    }
}