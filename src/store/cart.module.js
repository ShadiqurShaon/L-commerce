import{ADD_TO_CART,REMOVE_PRODUCT,ADD_QUANT,REMOVE_QUANT} from './actions.type'
import{SET_PRODUCT_TO_CART,
    REMOVE_PRODUCT_CART,
    SET_QUANT,
    SET_REMOVE_QUANT,
    CHECK_PRODUCT_ON_CART} from './mutations.type'

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
        var     temp = 0;
        state.cart.map(obj=>{
            temp = temp+obj.quant
        })
        return temp;
    }

}
const actions ={
    [ADD_TO_CART](context,payload){
       return context.commit(SET_PRODUCT_TO_CART,payload)
    },
    [REMOVE_PRODUCT](context,payload){
        return context.commit(REMOVE_PRODUCT_CART,payload)
    },
    [ADD_QUANT](context,payload){
        return context.commit(SET_QUANT,payload);
    },
    [REMOVE_QUANT](context,payload){
        return context.commit(SET_REMOVE_QUANT,payload)
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
        
    },
    [SET_QUANT](state,data){
            state.cart = state.cart.map(obj=>{
                if(obj.id === data){
                    state.total = parseInt(state.total)+parseInt(obj.price/obj.quant)
                    obj.price =  parseInt(obj.price) + parseInt(obj.price/obj.quant)
                    obj.quant = parseInt(obj.quant+1);
                    return obj;
                }
                return obj;

            });

    },
    [SET_REMOVE_QUANT](state,data){
        state.cart = state.cart.map(obj=>{
            if(obj.id ===data){
                state.total = parseInt(state.total)-parseInt(obj.price/obj.quant)
                obj.price =  parseInt(obj.price) - parseInt(obj.price/obj.quant)
                obj.quant = parseInt(obj.quant-1);
                return obj;
            }
            return obj;
        })
    }
   
}

export default{
    state,
    getters,
    mutations,
    actions
}