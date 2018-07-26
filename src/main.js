import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApiService from './common/api.service'
import Materials from "vue-materials"
import {  CHECK_AUTH } from './store/actions.type';


import axios from 'axios'
import VueAxios from 'vue-axios'


// export const bus = new Vue();

Vue.use(Materials)
Vue.use(VueAxios, axios)
// Vue.use(vueRouter);
ApiService.init();

// router.beforeEach(
//   (to, from, next) => {
//     return Promise
//       .all([store.dispatch(CHECK_AUTH)])
//       .then(next)
//   }
// )
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
