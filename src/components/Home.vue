<template>
  <div class="home-page">
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
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
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
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    </div>
  </div>
 




      
    </div>
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
              </li>
              <!-- <li class="nav-item" v-if="tag">
                <router-link
                  :to="{name: 'home-tag', params: {tag}}"
                  class="nav-link"
                  active-class="active">
                  <i class="ion-pound"></i>
                  {{ tag }}
                </router-link>
              </li> -->
            </ul>
          </div>
          <router-view></router-view>

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
        <div class="container">
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
            <div class="tag-list">
              <!-- <RwvTag
                v-for="(tag, index) in tags"
                :name="tag"
                :key="index">
              </RwvTag> -->
            </div>
          </div>
        </div>
      </div>
    </div>

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
        { id:3,
          image:"0081286.jpg",
          name: "CHECK PRINT SHIRT",
          price: 110
        },
        {id:2,
          image:"0081286.jpg",
          name: "GLORIA HIGH LOGO SNEAKER",
          price: 91
        },
        {id:1,
          image:
            "0081286.jpg",
          name: "CATE RIGID BAG",
          price: 94.5
        },
        {id:4,
          image:
            "0081286.jpg",
          name: "GUESS CONNECT WATCH",
          price: 438.9
        },
        {id:6,
          image:
            "0081286.jpg",
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
    // this.$store.dispatch(FETCH_TAGS)
    $(".carousel").carousel({
      interval: 3000
    });
  }
  // computed: {
  //   ...mapGetters([
  //     'isAuthenticated',
  //     'tags'
  //   ]),
  //   tag () {
  //     return this.$route.params.tag
  //   }
  // }
};
</script>

<style scoped>
/* .carousel-inner > .item > img {
  height: 400px;
} */
/* .carousel-inner > .item > a > img {
      width: 70%;
      margin: auto;
  } */
</style>




