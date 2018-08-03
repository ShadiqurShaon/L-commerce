<template>   

 <router-link class="produvt-view" active-class="active" :to="{name: 'product-view', params: {'slug': this.$vnode.key}}" @click.native="getProduct(product.id)" > 
      <div class="card">
        <div class="card-image">
          <img :src="`/static/photos/${product.image}`" alt="Los Angeles"> 
        </div>
        <div class="card-content">
          <div class="card-title price">
            TK:- {{product.price}}
          </div>
          <span class="card-title"> {{product.name}}</span>
          <p>{{product.description}}</p>
        </div>
        <div class="card-action">
          <a href="">Buy now</a>
        </div>
      </div>
      </router-link>
















<!-- <router-link :to="{name: 'product-view', params: {'slug': this.$vnode.key}}" @click.native="getProduct(product.id)" class="col-sm-4 preview" >     
          
            <div class="productIteam">
                <div class="picture" >
                  <!<img :src="require(`../../assets/${product.image}`)" alt="img not found"> -->
                 <!-- <img :src="`/static/photos/${product.image}`" alt="" />
                </div>
                <div class="details">
                  <h2 class="product-title"> {{product.name}}</h2>
                  <div class="add-info">
                    <div class="prices">
                       <span class="Customeprice">Tk-{{product.price}}</span> 
                    </div>
                    <div class="buttons-lower">
                        <button type="button" class="buttons-bilow"> -->
                            <!-- <span class="insideButton">buy now</span> -->
                            <!-- <p>BUY NOW</p>
                        </button>
                    </div>
                  </div>

                </div>
            
            </div> -->
           
            <!-- </router-link>  -->
   </template>
<script>
import { GET_PRODUCT_BY_ID } from "../../store/actions.type";
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods:{
    getProduct:function(id){
      this.$store.dispatch(GET_PRODUCT_BY_ID,id);
    }
  }
};
</script>
 <style scoped>
.card .card-image img {
  height: 200px!important;
}
.card{
  text-align: center;
}
.produvt-view{
  color: #212121!important;
  background-color: #efefef;
  font-family: inherit;
}
.price{
  font-weight: bold;
  color:#405d9b;
}
</style>
