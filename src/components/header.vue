<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand"
        :to="{ name: 'home' }">
        WE-SHE
      </router-link>
      <ul v-if="!isAuthenticated" class="nav navbar-nav pull-xs-right">       
        <!-- <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'home' }">
            Home
          </router-link>
        </li> -->
        
        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'login' }">
            <i class="ion-compose"></i>Sign in
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'register' }">
            <i class="ion-compose"></i>Sign up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            :to="{ name: 'cart' }">
            <i class="ion-compose"></i>&nbsp;[{{totalProduct}}]Cart {{getTotal}}
          </router-link>
        </li>
      </ul>
      <ul v-else class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'home' }">
            Home
          </router-link> -->
        </li>
        
        
         <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            :to="{ name: 'cart' }">
            <i class="ion-compose"></i>&nbsp;[{{totalProduct}}]Cart {{getTotal}}
          </router-link>
        </li>
        <li class="nav-item">

           <div @click="logout" class="nav-link">
           <h6>Logout</h6>
           
          </div>
        </li>

        <li class="nav-item" v-if="currentUser.name">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'profile', params: { username: currentUser.name } }">
            {{ currentUser.name }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'settings' }">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "../store/actions.type";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "currentUser",
      "isAuthenticated",
      "totalProduct",
      "getTotal"
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "home" });
        localStorage.clear();
      });
    }
  }
};
</script>