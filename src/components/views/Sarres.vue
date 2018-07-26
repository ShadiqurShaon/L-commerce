<template>
    <div class="container">
          <div class="row">
            <div class="col l6" v-for="(product,index) in getSarres" 
    :key="product.name.replace(/\s/g,'')+index"
    >
    <product-preview :product="product">
          </product-preview>
      
    </div>
        </div>
  </div> 
</template>
<script>
import { mapGetters } from "vuex";
import ProductPreview from "../AfterAuth/ProductPreview";
import{SARRES} from '../../store/actions.type'


     export default {
   
    components: {
    ProductPreview: ProductPreview
    },
    mounted () {
      this.$store.dispatch(SARRES)
    },
    computed: {
      ...mapGetters([
        'getSarres',
      ]),
  
    }
      
  }
</script>