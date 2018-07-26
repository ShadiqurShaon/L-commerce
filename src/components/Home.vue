<template>


<div class="containner">
    <div class="row">
      <div class="col l4 m6 s12 card" >
        <div class="carousel" id="first">
          <p class="card-title">Popular Product</p>

      <router-link  :to="{name: 'home'}" class="carousel-item" > 
        <img src="../assets/0084030.jpg" alt="Los Angeles">name
         </router-link>
         <router-link  :to="{name: 'home'}" class="carousel-item" > 
        <img src="../assets/0084030.jpg" alt="Los Angeles">
         </router-link>
         <router-link  :to="{name: 'home'}" class="carousel-item" > 
        <img src="../assets/0084030.jpg" alt="Los Angeles">
         </router-link>
         <router-link  :to="{name: 'home'}" class="carousel-item" > 
        <img src="../assets/0084030.jpg" alt="Los Angeles">
         </router-link>

    
        </div>
      </div>

      <div class="col l8 m6 s12">
       
           <div class="carousel carousel-slider z-depth-1" id="second">
          

      <router-link  :to="{name: 'home'}" class="carousel-item" > 
        <img src="../assets/0084030.jpg" alt="Los Angeles">
         </router-link>
         <router-link  :to="{name: 'home'}" class="carousel-item" > 
        <img src="../assets/0084030.jpg" alt="Los Angeles">
         </router-link>
         <router-link  :to="{name: 'home'}" class="carousel-item" > 
        <img src="../assets/0084030.jpg" alt="Los Angeles">
         </router-link>
         <router-link  :to="{name: 'home'}" class="carousel-item" > 
        <img src="../assets/0084030.jpg" alt="Los Angeles">
         </router-link>

    
        </div>
         
      </div>
    </div>
   
<router-view></router-view>
</div>
  
  <!-- <div class="home-page">
    <div class="banner">
      

  <div class="row">
    <div class="col-sm-4" style="background-color:lightgreen">
      <div class="popularProduct" style="text-align:center;padding-top:5px;">
          <h2 style="color:#003300">Popular Product</h2>
  <div class="panel panel-default">
    <div class="panel-body">A Basic Panel</div>
  </div>
      </div>
  
    </div>

     <div class="col-sm-8">
       <div id="myCarousel" class="carousel slide" data-ride="carousel">
    
    <! <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol> --> 

    <!-- Wrapper for slides -->
    <!-- <div class="carousel-inner">
      <div class="item active">
        <router-link  :to="{name: 'home'}" > 
        <img src="../assets/0081286.jpg" alt="Los Angeles" style="width:100%;">
        </router-link>
      </div>

      <div class="item">
        <router-link  :to="{name: 'home'}" > 
        <img src="../assets/0081287.jpg" alt="Los Angeles" style="width:100%;">
         </router-link>
      </div>
    
      <div class="item">
        <router-link  :to="{name: 'home'}" > 
        <img src="../assets/0084030.jpg" alt="Los Angeles" style="width:100%;">
         </router-link>
      </div>
    </div> -->

    <!-- Left and right controls -->
    <!-- <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    </div>
  </div> -->
 




      
    <!-- </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li  class="nav-item">
                <router-link
                  :to="{name: 'home-my-feed'}"
                  class="nav-link"
                  active-class="active">
                  Your Feed
                </router-link> 
              </li>
              <li class="nav-item">
                <router-link
                  :to="{name: 'home'}"
                  exact
                  class="nav-link"
                  active-class="active">
                  Global Feed
                </router-link>
              </li> -->
              <!-- <li class="nav-item" v-if="tag">
                <router-link
                  :to="{name: 'home-tag', params: {tag}}"
                  class="nav-link"
                  active-class="active">
                  <i class="ion-pound"></i>
                  {{ tag }}
                </router-link>
              </li> -->
            <!-- </ul>
          </div> -->
          

          <!-- <div class="container">
          <div class="row">
          <div class="col-sm-4" style="border:2px solid;word-wrap: break-word;" v-for="product in Products">
            
            <h3>{{product.name}}</h3>
            <div style="height: 150px;width: 287px;">
            <p>{{product.imgUrl}}</p>
            </div>
            <h1>{{product.price}}</h1>
            </div>

          </div>
          </div> -->
        <!-- <div class="container">
          <div class="row">

          <product-preview 
          v-for="(product,index) in Products"
            :product="product"
            :key="product.name.replace(/\s/g,'')+index">
          </product-preview>
           </div>
           </div> 
          </div>
          <h1>this is a message</h1>
        </div>
        
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list"> -->
              <!-- <RwvTag
                v-for="(tag, index) in tags"
                :name="tag"
                :key="index">
              </RwvTag> -->
            <!-- </div>
          </div>
        </div>
      </div>  
    </div> -->

</template>

<script>
import { mapGetters } from "vuex";
import Vue from "vue";
// import VueAgile from "vue-agile";
import ProductPreview from "./AfterAuth/ProductPreview";

// Vue.use(VueAgile);
// import RwvTag from '@/components/VTag'
// import { FETCH_TAGS } from '@/store/actions.type'

export default {
  name: "home",
  data() {
    return {
      Products: [
        {
          id: 3,
          image: "0081286.jpg",
          name: "CHECK PRINT SHIRT",
          price: 110
        },
        {
          id: 2,
          image: "0081286.jpg",
          name: "GLORIA HIGH LOGO SNEAKER",
          price: 91
        },
        {
          id: 1,
          image: "0081286.jpg",
          name: "CATE RIGID BAG",
          price: 94.5
        },
        {
          id: 4,
          image: "0081286.jpg",
          name: "GUESS CONNECT WATCH",
          price: 438.9
        },
        {
          id: 6,
          image: "0081286.jpg",
          name: "'70s RETRO GLAM KEFIAH",
          price: 20
        }
      ]
    };
  },
  components: {
    ProductPreview: ProductPreview
  },
  mounted() {
    $("#second").carousel({
      full_width: true,
        dist: 0,
    padding: 0,
   
    indicators: true,
    duration: 4000,
      
    });
    autoplay();
    function autoplay() {
      $("#second").carousel("next");
      setTimeout(autoplay, 4000);
    }

    $("#first").carousel();
  }
};
</script>

<style scoped>
.containner {
  margin: 10px;
  text-align: center;
}
.containner #first {
  height: 300px;
}
.containner #first .carousel-item {
  height: 150px;
  width: 197px;
}
.containner #first img {
  height: 150px;
  width: 197px;
  margin-top: 40px;
}
#first p {
  display: block;
  border: 1px soli;
  width: 100%;
  font-size: 20px;
  background-color: lightgrey;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.containner #second {
  height: 300px !important;
  margin-top: 7px;
  /* border:1px solid gray; */
  /* background-color: lightgray; */
}
#second .carousel-item {
  width: 100%;
  height: 100%;
  margin: 10px;
}
#second .carousel-item img {
  margin-left: -20px;
  padding: 10px;
}
</style>




