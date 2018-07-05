import Apiservice from '../common/api.service';
import Jwtservice from '../common/jwt.service';
import { LOGIN, LOGOUT, REGISTER, UPDATE_USER, CHECK_AUTH } from './actions.type';
import { PURGE_AUTH, SET_AUTH, SET_ERROR,SET_LOGIN_ERROR } from './mutations.type';



const state = {
    errors: [],
    lohinError:null,
    signerror: [],
    user: {},
    isAuthenticated: Jwtservice.getToken()
}

const getters = {

    currentUser(state) {
        return state.user;
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
                        resolve(value)
                    } else {
                        context.commit(SET_ERROR, value.data)
                    }

                }).catch((response) => {

                    console.log(response)

                })
        })
    },

    [REGISTER](context, credentials) {

        return new Promise((resolve) => {
            Apiservice
                .post('/user/register', credentials)
                .then((value) => {

                    if ('token' in value.data) {
                        context.commit(SET_AUTH, value.data);
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
            Apiservice.setHeader();
            Apiservice.get('/user')
                .then((data) => {
                    context.commit(SET_AUTH, data)
                })
                .catch((response) => {
                    console.log(response.data)
                    // context.commit(SET_ERROR, response.data.error)
                })
        } else {
            context.commit(PURGE_AUTH)
        }

    }
}
const mutations = {

    [SET_AUTH](state, user) {
        state.isAuthenticated = true
        state.user = user
        state.errors = [];
        Jwtservice.saveToken(user.token)
    },
    [SET_ERROR](state, error) {
        var temperror = error.error;
        var res = Object.keys(temperror)
           
            .map(function (k) {
                
                return temperror[k][0];
            });

        state.errors = res;

    },
    [SET_LOGIN_ERROR](state,error){
        console.log(error)
        state.lohinError = error
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false
        state.user = {}
        state.error = {}
        Jwtservice.destroyToken()
    }

}

export default {
    state,
    actions,
    mutations,
    getters
}
