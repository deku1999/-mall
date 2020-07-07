function padLeftZero(str){
    return  ('00'+str).substr(str.length);
}
export function debounce(fnc,delay) {
    let timer = null 
    return function (...args) {
            if(timer) clearTimeout(timer)
            timer = setTimeout(() =>{
                fnc.apply(this,args)
            },delay)
    }
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
export function formatDate(date,fmt){
    if(/(y+)/.test(fmt)){
        date= new Date(date*1000);
        fmt = fmt.replace(RegExp.$1,(date.getFullYear()+"").substr(4-RegExp.$1.length));
        var o ={
            'M+':date.getMonth()+1,
            'd+':date.getDate(),
            'h+':date.getHours(),
            'm+':date.getMinutes(),
            "s+":date.getSeconds()
        }
        for(var k in o){
            if(new RegExp(`(${k})`).test(fmt)){
                var str =o[k]+'';
                fmt = fmt.replace(RegExp.$1,(RegExp.$1.length ===1) ? str : padLeftZero(str));
            }
        }
        return fmt;
    }
}
export class getParams{
    constructor(info,rule) {
        this.out = info.set
        this.size = rule.tables[0]
    }
}