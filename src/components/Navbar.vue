<template>


 <div class="container manue hide-on-small-only">
        <div class="row">
      
           <div class="col l1 m4 s12 content">

              <router-link class="btn-floating btn-large #e3f2fd"
              :to="{ name: 'Western' }">
             <img src="../assets/western_wear-min.png" alt="Western" class="circle responsive-img">
             </router-link>
          <h6>Western</h6>
      </div>
      
 
           <div class="col l1 m4 s12 content" >

          <router-link class="btn-floating btn-large #e3f2fd"
              :to="{ name: 'Watches' }">
             <img src="../assets/Watches.png" alt="Watches" class="circle responsive-img">
             </router-link>
          <h6>Watches</h6>

      </div>

      <div class="col l1 m4 s12 content">

         <router-link class="btn-floating btn-large #e3f2fd"
              :to="{ name: 'Tshirt' }">
             <img src="../assets/T SHIRT.png" alt="Tshirt" class="circle responsive-img">
             </router-link>
          <h6>Tshirt</h6>

      </div>

      
      
           <div class="col l1 m4 s12 content">

          <router-link class="btn-floating btn-large #e3f2fd"
              :to="{ name: 'Tops' }">
             <img src="../assets/tops.png" alt="Tops" class="circle responsive-img">
             </router-link>
          <h6>Tops</h6>

        </div>

       <div class="col l1 m4 s12 content">

          <router-link class="btn-floating btn-large #e3f2fd"
              :to="{ name: 'Footwear' }">
             <img src="../assets/Stilettoes_n_Heels_01.png" alt="Footwear" class="circle responsive-img">
             </router-link>
          <h6>Footwear</h6>

      </div>

    

           <div class="col l1 m4 s12 content">

          <router-link class="btn-floating btn-large #e3f2fd"
              :to="{ name: 'Kurtis' }">
             <img src="../assets/kurta_kurti.png" alt="Kurtis" class="circle responsive-img">
             </router-link>
          <h6>Kurtis</h6>

      </div>


           <div class="col l1 m4 s12 content">

         <router-link class="btn-floating btn-large #e3f2fd"
              :to="{ name: 'Bags' }">
             <img src="../assets/bags-min.png" alt="Bags" class="circle responsive-img">
             </router-link>
          <h6>Bags</h6>

      </div>
    

           <div class="col l1 m4 s12 content">

          <router-link class="btn-floating btn-large #e3f2fd"
              :to="{ name: 'Sarres' }">
             <img src="../assets/sarees.png" alt="Sarres" class="circle responsive-img" >
             </router-link>
          <h6>Sarres</h6>
      </div>

    </div>
    </div>


































 <!-- <div id="middle-namvbar">
     
  <nav class="navbar navbar-light">
    
        
      <ul class="nav navbar-nav pull-xs-right">
    
        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'Western' }">
            <div>
              <img src="../assets/western_wear-min.png" alt="Western"><p class="ptext">Western</p>
             
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'Watches' }">
            <div>
              <img src="../assets/Watches.png" alt="Watches"><p class="ptext">Watches</p>
             
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'Tshirt' }">
            <div>
              <img src="../assets/T SHIRT.png" alt="Tshart"><p class="ptext">T-shirt</p>
                
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'Tops' }">
            <div>
              <img src="../assets/tops.png" alt="Tops"><p class="ptext">Tops</p>
            
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'Footwear' }">
            <div>
              <img src="../assets/Stilettoes_n_Heels_01.png" alt="Footwear"><p class="ptext">Footwear</p>
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'Kurtis' }">
            <div>
             <img src="../assets/kurta_kurti.png" alt="Kurtis"><p class="ptext">Kurtis</p>
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'Bags' }">
            <div>
             <img src="../assets/bags-min.png" alt="Bags"><p class="ptext">Bags</p>
            </div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'Sarres' }">
            <div >
             <img src="../assets/sarees.png" alt="Sarres"><p class="ptext">Sarres</p>
            </div>
          </router-link>
        </li>
        
      </ul>
    
  </nav>
   </div> -->
</template>

<style  scoped>
  .manue{
    margin-top: 15px;
  }
  .manue .row div{
  margin-top: 10px;
  width: 88px;
}

.content{
  text-align: center;
}
.content img{
  padding: 5px;
}
</style>


