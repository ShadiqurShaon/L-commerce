import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth.module';
import product from './product.module'
Vue.use(Vuex)

export default new Vuex.Store({
 
  modules:{
    auth,
    product
  },
  plugins: [createPersistedState()]
})