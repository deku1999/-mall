import {ADD_COUNT,ADDTOCART} from './mutation-types'
export default {
    [ADD_COUNT](state,payload) {
        payload.counter++
    },
    [ADDTOCART](state,payload) {
        payload.checked = true
        state.cartList.push(payload)
    }
}