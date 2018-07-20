import{ADD_TO_CART,REMOVE_PRODUCT} from './actions.type'
import{SET_PRODUCT_TO_CART,REMOVE_PRODUCT_CART} from './mutations.type'

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
    },
    [REMOVE_PRODUCT](context,payload){
        return context.commit(REMOVE_PRODUCT_CART,payload)
    }
}
const mutations = {
    [SET_PRODUCT_TO_CART](state,data){
       state.total = parseInt(state.total)+parseInt(data.price);
        state.cart.push(data);
    },
    [REMOVE_PRODUCT_CART](state,data){
        state.cart = state.cart.filter(product=>product.id!=data.id)
        state.total = parseInt(state.total)-parseInt(data.price);
        console.log(data.price)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}