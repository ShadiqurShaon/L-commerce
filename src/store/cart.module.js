import{ADD_TO_CART} from './actions.type'
import{SET_PRODUCT_TO_CART} from './mutations.type'

const state ={
    products: {
        id:'',
        name:'',
        price:'',
        image:''
    },
    cart: [],
    total:0,
    currency: "EUR"
}
const getters = {
    getCart(state){
        return state.cart;
    },
    getTotal(state){
        return state.total
    },
    totalProduct(state){
        return state.cart.length
    }

}
const actions ={
    [ADD_TO_CART](context,payload){
       return context.commit(SET_PRODUCT_TO_CART,payload)
    }
}
const mutations = {
    [SET_PRODUCT_TO_CART](state,data){
       state.total = parseInt(state.total)+parseInt(data.price);
        state.cart.push(data);
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}