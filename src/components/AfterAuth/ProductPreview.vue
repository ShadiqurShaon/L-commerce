<template>   
<router-link :to="{name: 'product', params: {'slug': this.$vnode.key}}" class="col-sm-4" >     
          
            <div class="productIteam">
                <div class="picture" >
                  <img :src="require(`../../assets/${product.imgUrl}`)" alt="">
                </div>
                <div class="details">
                  <h2 class="product-title"></h2>
                  <div class="add-info">
                    <div class="prices">

                    </div>
                    <div class="buttons-lower">

                    </div>
                  </div>

                </div>
            
            </div>
           
            </router-link>
   </template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.productIteam {
  margin-left: -10px;
  margin-right: -10px;
  margin-top: 5px;
  padding: 5px;
  border: 2px solid;
  word-wrap: break-word;
  height: 350px;
}

.productIteam img{

width:150px;
height:150px;
}
</style>
