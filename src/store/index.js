import Vuex from 'vuex'
import Vue from 'vue'
import product_data from '../product'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        product: [],
        cart: [],
        message:''
    },
    actions: {
        getData(context) {
            setTimeout( () => {
                context.commit('InitData', product_data)
            },500)
        }
    },
    mutations: {
        InitData(state ,data) {
            state.product = data
            console.log('初始化数据成功')
        },
        addToCart(state,data) {
            let sign = true
            for(let item of state.cart) {
                if(item.id === data.id){
                    item.counter++
                    state.message = '商品数量加1'
                    sign = false
                    break
                }
            } 
            if(sign) {
                data.counter = 1
                state.cart.push(data)
                state.message = '添加购物车成功'
            }
        },
        addNumber(state,data) {
            for(let i=0;i<state.cart.length;i++) {
                if(state.cart[i].id === data.id) {
                    data.counter++
                    state.cart.splice(i,1,data)
                    break
                }
            }
        },
        subNumber(state,data) {
            for(let i=0;i<state.cart.length;i++) {
                if(state.cart[i].id === data.id) {
                    data.counter--
                    state.cart.splice(i,1,data)
                    break
                }
            }
        },
        delItem(state,data) {
            for(let i=0;i<state.cart.length;i++) {
                if(state.cart[i].id === data.id) {
                    state.cart.splice(i,1)
                    break
                }
            }
        }
    }
})
export default store