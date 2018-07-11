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
        <img src="../assets/screenshot-www.comparemymobile.com-2018.07.09-13-03-33.png" alt="Los Angeles" style="width:100%;">
      </div>

      <div class="item">
        <img src="../assets/screenshot-www.dxomark.com-2018.07.09-13-04-03.png" alt="Los Angeles" style="width:100%;">
        
      </div>
    
      <div class="item">
        <img src="../assets/screenshot-www.eventsclothing.co.nz-2018.07.09-12-59-33.png" alt="Los Angeles" style="width:100%;">
        
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
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Vue from 'vue'
  import VueAgile from 'vue-agile'

      Vue.use(VueAgile)
  // import RwvTag from '@/components/VTag'
  // import { FETCH_TAGS } from '@/store/actions.type'

  export default {
    name: 'home',
    components: {
      // RwvTag
    },
    mounted () {
      // this.$store.dispatch(FETCH_TAGS)
     $('.carousel').carousel({
  interval: 3000
})
    },
    // computed: {
    //   ...mapGetters([
    //     'isAuthenticated',
    //     'tags'
    //   ]),
    //   tag () {
    //     return this.$route.params.tag
    //   }
    // }
  }
</script>

<style scoped>
 .carousel-inner > .item > img{
 
   height: 400px;
 }
  /* .carousel-inner > .item > a > img {
      width: 70%;
      margin: auto;
  } */
</style>




