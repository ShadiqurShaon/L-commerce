import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApiService from './common/api.service'

import axios from 'axios'
import VueAxios from 'vue-axios'


// export const bus = new Vue();

Vue.use(VueAxios, axios)
// Vue.use(vueRouter);
ApiService.init();

// const router = new vueRouter({
//   routes:Routes,
//   mode:'history'
// });

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
