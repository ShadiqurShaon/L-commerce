<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col l6 offset m3 s12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }">
              Need an account?
            </router-link>
          </p>
          <ul v-if="errors" class="error-messages">
            <li v-for="(v,index) in errors"
                :key="index">
               {{ v }}
            </li>
          </ul>
          <form v-on:submit.prevent="onSubmit(email, password)">
            <fieldset class="form-group">
              <label>Email</label>
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="email"
                placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <label>password</label>
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="password"
                placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { LOGIN } from "../store/actions.type";

export default {
  //   name: 'RwvLogin',
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit(email, password) {
      this.$store
        .dispatch(LOGIN, { email: this.email, password: this.password })
        // .then(() => this.$router.push({ name: 'home' }))
        .then(() => {
          if (this.$router.currentRoute.fullPath === "/login") {
            this.$router.push({ name: "home" });
          } else {
            this.$router.push({
              name: this.$router.currentRoute.query.redirect
            });
          }
        });
      // console.log(this.$router.currentRoute);
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>


<style scoped>
.form-group{
  border: none;
  color: black;
}

.form-group label{
  color: #405d9b;
  font-size: 20px;
}
</style>
