import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth.module';
import product from './product.module'
import cart from './cart.module'
Vue.use(Vuex)

export default new Vuex.Store({
 
  modules:{
    auth,
    product,
    cart
  },
  plugins: [createPersistedState()]
})