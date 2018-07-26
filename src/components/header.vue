<template>
<div class="navbar-fixed">
    <nav class="nav-wraper #009688 teal ">
        <div class="container">
            <!-- <a class="brand-logo" href="#"> WE-SHE</a> -->
            <router-link class="brand-logo"
             :to="{ name: 'home' }">
             WE-SHE
          </router-link>

            <a href="#" class="sidenav-tregger hide-on-large-only " data-activates="slide-out">
                <i class="material-icons">menu</i>
            </a>
        <ul v-if="!isAuthenticated" class="right hide-on-med-and-down">
            <li>
               <router-link class="nav-link"
            active-class="active"
            :to="{ name: 'cart' }">
            [{{totalProduct}}]Cart {{getTotal}}
          </router-link> 
          </li>
            <li>
               <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'login' }">
            Sign in
          </router-link>
            </li>
            <li>
              <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'register' }">
            Sign up
          </router-link>
            </li>
        </ul>
        <ul v-else class="right hide-on-med-and-down">
          <li>
            <router-link class="nav-link"
            active-class="active"
            :to="{ name: 'cart' }">
            [{{totalProduct}}]Cart {{getTotal}}
          </router-link>
          </li>
          <li>
            <a href="#" @click="logout" class="nav-link" >Log out</a>
          </li>
          <li v-if="currentUser.name">
            <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'profile', params: { username: currentUser.name } }">
            {{ currentUser.name }}
          </router-link>
          </li>
          <li>
             <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'settings' }">
            Profile
          </router-link>
          </li>
        </ul>
        </div>    
    </nav>

    <!-- <ul class="collection side-nav" id="slide-out"> -->
            <!-- <li class="collection-item"><a class="secondary-content" href="#"><img src="../assets/bags-min.png" alt="Bags" class="circle responsive-img" style="background-color:red;width:50px;height:50px;margin:5px">  dsfsd</a> </li> -->
            <!-- <li class="collection-item"><a class="secondary-content" href="#"> <img src="../assets/bags-min.png" alt="Bags" class="circle responsive-img" style="background-color:red;width:50px;height:50px;margin:5px">Contact</a> </li> -->
            <!-- <li class="collection-item"><a class="secondary-content" href="#"> <img src="../assets/bags-min.png" alt="Bags" class="circle responsive-img" style="background-color:red;width:50px;height:50px;margin:5px">Contact</a></li> -->
            <!-- <li class="collection-item"><a class="secondary-content" href="#"> <img src="../assets/bags-min.png" alt="Bags" class="circle responsive-img" style="background-color:red;width:50px;height:50px;margin:5px">Login</a></li> -->
    <!-- </ul> -->

    <ul id="slide-out" class="side-nav">
    <li class="card">
        <router-link :to="{ name: 'Bags' }">
             <img src="../assets/bags-min.png" alt="Bags" class="circle responsive-img"><span>Bags </span> 
       </router-link>   
    </li>

     <li class="card">
        <router-link :to="{ name: 'Western' }">
             <img src="../assets/western_wear-min.png" alt="Western" class="circle responsive-img"><span>Western </span> 
       </router-link>   
    </li>

     <li class="card">
        <router-link :to="{ name: 'Watches' }">
             <img src="../assets//Watches.png" alt="Watches" class="circle responsive-img"><span>Watches </span> 
       </router-link>   
    </li>

     <li class="card">
        <router-link :to="{ name: 'Tshirt' }">
             <img src="../assets/T SHIRT.png" alt="Tshirt" class="circle responsive-img"><span>Tshirt </span> 
       </router-link>   
    </li>

     <li class="card">
        <router-link :to="{ name: 'Tops' }">
             <img src="../assets/tops.png" alt="Tops" class="circle responsive-img"><span>Tops </span> 
       </router-link>   
    </li>

     <li class="card">
        <router-link :to="{ name: 'Footwear' }">
             <img src="../assets/Stilettoes_n_Heels_01.png" alt="Footwear" class="circle responsive-img"><span>Footwear </span> 
       </router-link>   
    </li>

     <li class="card">
        <router-link :to="{ name: 'Kurtis' }">
             <img src="../assets/kurta_kurti.png" alt="Kurtis" class="circle responsive-img"><span>Kurtis </span> 
       </router-link>   
    </li>

     <li class="card">
        <router-link :to="{ name: 'Sarres' }">
             <img src="../assets/sarees.png" alt="Sarres" class="circle responsive-img"><span>Sarres </span> 
       </router-link>   
    </li>

    
    
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
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
  mounted() {
    $(".sidenav-tregger").sideNav();
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

<style scoped>
.side-nav .circle {
      height: 50px;
      width: 50px;
      background-color: gray;
      margin-top: 6px;
      margin-bottom: -17px;
      margin-right: 20px;
}

.side-nav  span{
  font-size:22px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
.right .nav-link{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 15px;
  /* font-weight: bold; */
}
</style>
