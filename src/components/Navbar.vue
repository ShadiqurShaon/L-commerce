<template>
 <div id="middle-namvbar">
     
  <nav class="navbar navbar-light">
    
        
      <ul class="nav navbar-nav pull-xs-right">
    
        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'settings' }">
            <div>
              <img src="../assets/western_wear-min.png" alt="Western"><p class="ptext">Western</p>
             
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'settings' }">
            <div>
              <img src="../assets/Watches.png" alt="Watches"><p class="ptext">Watches</p>
             
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'settings' }">
            <div>
              <img src="../assets/T SHIRT.png" alt="Tshart"><p class="ptext">T-shirt</p>
                
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'settings' }">
            <div>
              <img src="../assets/tops.png" alt="Tops"><p class="ptext">Tops</p>
            
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'settings' }">
            <div>
              <img src="../assets/Stilettoes_n_Heels_01.png" alt="Footwear"><p class="ptext">Footwear</p>
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'settings' }">
            <div>
             <img src="../assets/kurta_kurti.png" alt="Kurtis"><p class="ptext">Kurtis</p>
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'settings' }">
            <div>
             <img src="../assets/bags-min.png" alt="Bags"><p class="ptext">Bags</p>
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'settings' }">
            <div >
             <img src="../assets/sarees.png" alt="Sarres"><p class="ptext">Sarres</p>
            </div>
          </router-link>
        </li>
        
      </ul>
    
  </nav>
   </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {

    data(){
      return{
       
      }
    },
    computed: {
    
    }
  }
</script>

<style  scoped>
#middle-namvbar{
    background-color :lightgreen;
    margin: -11px 0px -14px 0px;
    
}
.navbar .navbar-light{
        padding-top: 22px;
         margin-top: -3%;
}
.nav-item .nav-link {
    display: block;
    text-align: center;
    background-color: #fbfbfb;
    border: thin solid #e0e0e0;
    padding: 15px 20px;
    height: 100px;
    width: 100px
}
/* .container{
    margin:
} */

.pull-xs-right .nav-item{
    padding-left: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 5px;
}

.picDiv{
    height: 82px;
    width: 72px;
}
.ptext{
    font-weight: bold;
    font-family: sans-serif;
   
}
img{
    height: 50px;
    width: 60px;
}

</style>


