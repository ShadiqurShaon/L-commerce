import Apiservice from '../common/api.service';
import Jwtservice from '../common/jwt.service';
import { LOGIN, LOGOUT, REGISTER, UPDATE_USER, CHECK_AUTH , USER_PROFILE} from './actions.type';
import { PURGE_AUTH, SET_AUTH, SET_ERROR, SET_LOGIN_ERROR,SET_UPDATE_USER } from './mutations.type';




const state = {
    errors: [],
    user: {},
    updateUserProfile:{},
    isAuthenticated: !!Jwtservice.getToken()
}

const getters = {

    currentUser(state) {
        return state.user;
    },
    updatedUser(state){

        return state.updateUserProfile;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
}

const actions = {

    [LOGIN](context, credentials) {

        return new Promise((resolve) => {
            Apiservice
                .post('/user/login', credentials)
                .then((value) => {
                    if ('token' in value.data) {
                        context.commit(SET_AUTH, value.data);
                        context.commit(SET_UPDATE_USER, value.data.user);
                        resolve(value)
                    } else {
                        context.commit(SET_ERROR, value.data)
                    }
                }).catch((response) => {
                    console.log(response)
                })
        })
    },

    [LOGOUT](context) {
        context.commit(PURGE_AUTH)
    },
    [REGISTER](context, credentials) {
        return new Promise((resolve) => {
            Apiservice
                .post('/user/register', credentials)
                .then((value) => {
                    if ('token' in value.data) { 
                        
                        context.commit(SET_AUTH, value.data);
                        context.commit(SET_UPDATE_USER, value.data.user);

                        resolve(value)
                    } else {
                        context.commit(SET_ERROR, value.data)
                    }
                }).catch((response) => {

                    console.log(response)

                })
        })
    },
    [CHECK_AUTH](context) {
        if (Jwtservice.getToken()) {
           
            Apiservice.setHeader()
            Apiservice.get('/user')
                .then((value) => {
                    var data = {
                        user: value.data,
                        token: Jwtservice.getToken()
                    }
                    context.commit(SET_AUTH, data)
                })
                .catch((response) => {
                    console.log(response.data)
                   
                })
        }
        else {
           
            context.commit(PURGE_AUTH)

        }

    },
    [UPDATE_USER](context,credentials){
        return new Promise((resolve)=>{
            Apiservice.post('user/update',credentials)
            .then((value)=>{
                context.commit(SET_UPDATE_USER, value.data)
                resolve(value)
            })
        })

    }
  
}
const mutations = {

    [SET_AUTH](state, data) {

        state.isAuthenticated = true
        state.user = data.user
       
        state.errors = [];
        Jwtservice.saveToken(data.token)
    },
    [SET_UPDATE_USER](state,data){
       
        state.updateUserProfile = data
    },
    [SET_ERROR](state, error) {
        var temperror = error.error;
        var res = Object.keys(temperror)

            .map(function (k) {

                return temperror[k][0];
            });

        state.errors = res;

    },

    [PURGE_AUTH](state) {
        
        state.isAuthenticated = false
        state.user = {}
        state.error = {}
        state.updateUserProfile = {}
        Jwtservice.destroyToken()
    }

}

export default {
    state,
    actions,
    mutations,
    getters
}
