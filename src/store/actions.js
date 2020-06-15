import {ADD_COUNT,ADDTOCART} from './mutation-types'
export default {
        addCart(context,payload) {
            return new Promise((resolve,reject) =>{
                let sign = null
                for(let item of context.state.cartList){
                if(item.id === payload.id){
                    sign = item
                }
            }
            if(sign){
                resolve('该商品数量加一')
                context.commit(ADD_COUNT,sign)
            }
            else{
                resolve("商品添加到购物车成功")
                payload.counter = 1
                context.commit(ADDTOCART,payload)
            }
            })
        }
    
}