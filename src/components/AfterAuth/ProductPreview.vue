<template>   
<router-link :to="{name: 'product-view', params: {'slug': this.$vnode.key,'id':product.id}}" class="col-sm-4 preview" >     
          
            <div class="productIteam">
                <div class="picture" >
                  <!-- <img :src="require(`../../assets/${product.image}`)" alt="img not found"> -->
                 <img :src="`static/photos/${product.image}`" alt="" />
                </div>
                <div class="details">
                  <h2 class="product-title"> {{product.name}}</h2>
                  <div class="add-info">
                    <div class="prices">
                       <span class="Customeprice">Tk-{{product.price}}</span> 
                    </div>
                    <div class="buttons-lower">
                        <button type="button" class="buttons-bilow">
                            <!-- <span class="insideButton">buy now</span> -->
                            <p>BUY NOW</p>
                        </button>
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
.picture{
width:100%;
height:200px;
}
.picture img{

width:100%;
height:200px;
}


.product-title{
   margin-top: 5px;
    height: 40px;
    overflow: hidden;
    padding: 0 15px;
    font-size: 16px;
    font-weight: normal;
    color: #333;
    text-align: center;
    
}
.details .product-title{
  display: block; 
 
}
.add-info .prices{
  text-align:center;
}
.add-info .prices .Customeprice{
  
  font-weight: bold;
 font-size: 24px;
    color: #00a1b1;
    padding: 0 4px;
    vertical-align: middle;
}
.preview{
 text-decoration: none!important; 
}
.buttons-lower{
  margin: 0px;
  border: 0px;
}
.buttons-lower .buttons-bilow{
    display: block;
    color:grey;
    width: 100%;
    height: 43px;
    border: none;
    padding: 0 0 0 25px;
    background-color: rgb(195, 250, 250);
    font-size: 15 px;
    font-weight: bold;
     text-transform: uppercase;
    transition: all .2s ease;
}

.buttons-lower .buttons-bilow:hover{
   
    background-color: rgb(165, 33, 33);
    color:white;
}
.buttons-lower .buttons-bilow p{
      padding-top: 8px;
    padding-right: 25px;
} 
/* .buttons-lower .buttons-bilow .insideButton{
    display: inline-block;
    width: 100%;
    position: relative;
    height: 18px;
    background-color: #fff;
    padding: 0 0 0 25px;
    font-size: 13px;
    font-weight: bold;
    color: #777;
    text-transform: uppercase;
    transition: all .2s ease;
}

.buttons-lower .buttons-bilow .insideButton:hover{
  background-color: rgb(165, 33, 33);
    color:white;
} */
</style>
