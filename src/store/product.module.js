import Apiservice from '../common/api.service';
import{PRODUCT_BY_CATEGORY,GET_PRODUCT_BY_ID} from './actions.type'
import{SET_PRODUCT,SET_PRODUCT_BY_ID} from './mutations.type'


const state = {
   products:[],
   productById:{}
}

const getters = {
    getProducts(state){
        return state.products;
    },
    productById(state){
        return state.productById;
    }

}

const actions = {

    [PRODUCT_BY_CATEGORY](context,payload){
        return new Promise((resolve)=>{
            Apiservice.get('product',payload)
            .then((value)=>{
                context.commit(SET_PRODUCT,value.data)
                
            }).catch((response) => {
                console.log(response)
            })    
        })
    },
    [GET_PRODUCT_BY_ID](context,pram){
        
        return new Promise((resolve)=>{
            Apiservice.get('productByID',pram)
            .then((value)=>{
                
                context.commit(SET_PRODUCT_BY_ID,value.data)                
            }).catch((response)=>{
                console.log(response)
            })
        })
        console.log(pram);
    }
    
  
}
const mutations = {
    [SET_PRODUCT](state,data){
        state.products = data;
    },
    [SET_PRODUCT_BY_ID](state ,data){
    
        state.productById = data;
    }

}

export default {
    state,
    actions,
    mutations,
    getters
}
