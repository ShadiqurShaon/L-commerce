import Apiservice from '../common/api.service';
import{SARRES,GET_PRODUCT_BY_ID} from './actions.type'
import{SET_SARRES,SET_PRODUCT_BY_ID} from './mutations.type'


const state = {
   sarres:[],
   productById:{}
}

const getters = {
    getSarres(state){
        return state.sarres;
    },
    productById(state){
        return state.productById;
    }

}

const actions = {

    [SARRES](context){
        return new Promise((resolve)=>{
            Apiservice.get('product','Sarres')
            .then((value)=>{
                context.commit(SET_SARRES,value.data)
                
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
    [SET_SARRES](state,data){
        state.sarres = data;
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
