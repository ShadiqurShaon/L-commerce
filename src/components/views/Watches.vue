<template>
    <div class="container">
          <div class="row">
            <div class="col l6" v-for="(product,index) in getProducts" 
    :key="product.name.replace(/\s/g,'')+index"
    >
    <product-preview :product="product" :key="product.name.replace(/\s/g,'')+index">
          </product-preview>
      
    </div>
        </div>
  </div> 
</template>
<script>
import { mapGetters } from "vuex";
import ProductPreview from "../AfterAuth/ProductPreview";
import { PRODUCT_BY_CATEGORY } from "../../store/actions.type";

export default {
  components: {
    ProductPreview: ProductPreview
  },
  mounted() {
    this.$store.dispatch(PRODUCT_BY_CATEGORY,'watches');
  },
  computed: {
    ...mapGetters(["getProducts"])
  }
};
</script>