import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        product: []
    },
    actions: {
        addCart(context,data) {
            return new Promise((resolve,reject) => {
                let a = context.state.product
                let sign = true
                for(let i=0;i<a.length;i++) {
                    if(a[i].id === data.id) {
                        context.commit('addCount',i)
                        resolve('商品数量加1')
                        sign = false
                        break
                    }
                }
                if(sign) {
                    context.commit('toCart',data)
                    resolve('添加购物车成功')
                }
            })
         }
    },
    mutations: {
        delCart(state,id) {
            for(let i=0;i<state.product.length;i++) {
                if(state.product[i].id === id) {
                    state.product.splice(i,1)
                    break
                }
            }
        },
        CartAdd(state,id) {
            for(let i=0;i<state.product.length;i++) {
                if(state.product[i].id === id) {
                    state.product[i].counter++
                    break
                }
            }
        },
        CartSub(state,id) {
            for(let i=0;i<state.product.length;i++) {
                if(state.product[i].id === id) {
                    state.product[i].counter--
                    break
                }
            }
        }
        ,
        addCount(state,i) {
            state.product[i].counter++
        },
        toCart(state,data) {
            data.checked = true
            data.counter = 1
            state.product.push(data)
        },
        clearCart(state,arr) {
            console.log(arr)
            for(let item of arr) {
                for(let i=0;i<state.product.length;i++) {
                    if(state.product[i].id === item){
                        state.product.splice(i,1)
                        break
                    }
                }
            }
        }
    },
    getters:{
        cart(state) {
            return state.product
        },
        cartlength(state) {
            return state.product.length
        }
    }
})
export default store