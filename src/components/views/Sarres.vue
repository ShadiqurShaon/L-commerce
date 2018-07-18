<template>
    <div class="container">
          <div class="row">
            <product-preview 
            v-for="(product,index) in getSarres"
                :product="product"
                :key="product.name.replace(/\s/g,'')+index">
            </product-preview>
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
        'getSarres'
      ])
    }
      
  }
</script>