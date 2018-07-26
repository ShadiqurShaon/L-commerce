<template>
  <div class="container">
      <div class="row">
        <div class="col l6 m6 s12">
            <div style="height:300px;">
              <img :src="`/static/photos/${productById.image}`" alt="" style="height:300px;width:100%;border:1px solid gray" />
            </div>
             <div v-for="(image,index) in productById.product_photo_and_review"
             :key="index"
             @mouseover="mouseOver(image.photos,productById)"
            
              class="col l3 m3 s3 otherpic" style="border: 1px solid #ddd;">
                <img   :src="`/static/photos/${image.photos}`" alt="" style="background-color:blue;width:100%" />
          </div>
        </div>
        <div class="col l6 m6 s12">
          <div style="background-color:gray">

            <!-- <div v-for="(image,index) in productById.product_photo_and_review"
             :key="index"
             @mouseover="mouseOver(image.photos,productById)"
            
              class="col l3 m3 s3 otherpic" style="border: 1px solid #ddd;">
                <img   :src="`/static/photos/${image.photos}`" alt="" style="background-color:blue;width:100%" />
          </div>  -->
          <div class="col l12 description" style="margin:auto;width:100%" >
              
                  <div class="card grey darken-1 white-text" style="width:100%;text-align:center;height:130px;margin-left: -10px;">
                      <span class="card-title">Description</span>
                          <hr>
                        <div class="card-content white-text" style="padding: 0 !important;">
                          <p>{{productById.description}}</p>
                        </div>
       
                      </div>
                  </div>

                  <div class="col l12 description" style="margin:auto;width:100%" >
                
                      <div class="card blue-grey darken-1" style="width:100%;text-align:center;margin-left: -10px;" >
                          <div class="card-title" style="color:yellow">Price:{{productById.price}}</div>
         
                               <div class="card-content white-text" style="padding: 0 !important;">
                                     <p>Discount: {{productById.discount}}%</p>
                                  </div>
                                   <div class="card-action">
                                   <button class="btn-large pulse"  :disabled="check"   @click="addToCArt({id:productById.id,name:productById.name,price:productById.price,image:productById.image,quant:1})" >Add to Cart</button>
                                    </div>
                                 </div>
                   </div>

                  <div class="col l12 description" style="margin:auto;width:100%" >
                
                      <div class="card blue-grey darken-1" style="width:100%;text-align:center;margin-left: -10px;" >
                          <div class="card-title" style="color:yellow">Order by phone</div>
         
                               <div class="card-content white-text" style="padding: 0 !important;">
                                     <h4>01737030457</h4>
                                  </div>
                                   <div class="card-action">
                                     <div class="card-title" style="color:yellow;padding-bottom: 8px;margin-top: -14px;">Payment</div>
                                     <img src="/static/photos/payment-icons.png" alt="">
                                    </div>
                                 </div>
                   </div>

               </div>
             
                </div>

        </div>
      </div>  

        
</template>
<script>
import { mapGetters } from "vuex";

import {
  GET_PRODUCT_BY_ID,
  ADD_TO_CART,
  CHECK_CART_PRODUCT
} from "../../store/actions.type";

import { CHECK_PRODUCT_ON_CART } from "../../store/mutations.type";

export default {
  watch: {},
  computed: {
    // productById() {

    //   return this.$store.getters.productById;
    // },
    ...mapGetters(["productById", "getCart"]),
    check: function() {
      console.log("inside");
      var productId = this.productById.id;
      var cart = this.getCart;
      var temp = false;
      cart.map(obj => {
        if (obj.id === productId) {
          console.log("got it");
          temp = true;
        }
      });

      return temp;
      // console.log(this.productById)
    }
    // check(){

    //   if(this.productById.id!== 'undefined'){

    //   var temp = this.$store.commit(CHECK_PRODUCT_ON_CART, this.productById.id);

    //   }
    // }
  },

  data() {
    return {};
  },
  methods: {
    mouseOver: (img, product) => {
      product.image = img;
    },
    addToCArt: function(product) {
      return this.$store.dispatch(ADD_TO_CART, product);
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
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.otherpic {
  display: table-cell;
  vertical-align: middle;
}
.otherpic img {
  height: 70px;
  width: 100%;
}
</style>
