import Apiservice from '../common/api.service';
import{SARRES} from './actions.type'
import{SET_SARRES} from './mutations.type'


const state = {
   sarres:[]
}

const getters = {
    getSarres(state){
        return state.sarres;
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
    }
    
  
}
const mutations = {
    [SET_SARRES](state,data){
        state.sarres = data;
    }

}

export default {
    state,
    actions,
    mutations,
    getters
}
