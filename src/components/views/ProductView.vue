<template>

  <div class="container" style="text-align:center">
    <h1>Product Deatails of :{{productById.name}}</h1>
   <div class="row" style="margin-top:30px">
       <div class="col-sm-6 picture">
         <div class="mainpic" style="width:100%">
            <img :src="`/static/photos/${productById.image}`" alt="" style="background-color:blue" />
         </div>
         <div class="relative" >
          <div v-for="(image,index) in productById.product_photo_and_review"
             :key="index"
             @mouseover="mouseOver(image.photos)"
            
              class="otherpic" style="border: 1px solid #ddd;">
                <img   :src="`/static/photos/${image.photos}`" alt="" style="background-color:blue" />
          </div> 
         </div>
              
        </div> 
        <div class="col-sm-6" style="border: 1px solid #dae2ee;height:350px">
              <div class="description" style="margin:auto;width:100%" >
                <p>{{productById.description}}</p>
              </div>
              <div class="price" style="margin:auto;width:100%" >
                <p>Price For You:{{productById.price}} </p>
              </div>

               <div class="discound" style="margin:auto;width:100%" >
                <p>Discount For You:{{productById.discount}} </p>
              </div>
              <div class="cart">
                <button class="primary">Cart it now</button>
              </div>
              <div class="phoneContact" style="margin:auto;width:100%">
                  For Order by phone please contact :01111222
              </div>
              <div class="payment">
                  Payment: <img src="/static/photos/payment-icons.png" alt="">
              </div>
         </div>

     </div>
     <div style="margin-bottom:100px">

    
     </div>
  </div>    
       
   
  
      
           

        
</template>
<script>
import { mapGetters } from "vuex";

import { GET_PRODUCT_BY_ID } from "../../store/actions.type";
export default {
  props: {
    slug: {
      type: String,
      required: true
    }
   
  },
  data() {
    return {
      
    };
  },
  mounted() {
    // this.$store.dispatch(GET_PRODUCT_BY_ID,this.productId);
  },
  computed: {
    ...mapGetters(["productById"])
  },
  methods:{
    mouseOver:(img)=>{

      alert(this.productById)
      
      
    }
  }
};
</script>

<style scoped>
.picture {
  width: 100%;
 
  background-color: blanchedalmond;
  border: 1px solid #dae2ee;

}
.picture img {
  width: 100%;
  height: 350px;
}

.relative {
   display: table;
    width:100%;
    margin-top: 10px;
    margin-bottom: 10px;
}
.otherpic { display: table-cell; vertical-align: middle; }
.otherpic img{
  height: 50px;
}
</style>
