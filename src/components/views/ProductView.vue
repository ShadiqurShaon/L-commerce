<template>
<div style="text-align:center">
        
         <p >ID:{{productById.id}}</p>
         <p >CATEGORYiD:{{productById.product_category_id}}</p>
         <p >Name:{{productById.name}}</p>
         <p >Description:{{productById.description}}</p>
         <p >PRICE:{{productById.price}}</p>
         <p >{{productById.image}}</p>
         <p >{{productById.discount}}</p>
          <p >{{productById.product_photo_and_review[0].photos}}</p>
            <p >{{productById.product_photo_and_review[1].photos}}</p>
              <p >{{productById.product_photo_and_review[2].photos}}</p>
                <p >{{productById.product_photo_and_review[3].photos}}</p>
                  <p >{{productById.product_photo_and_review[4].photos}}</p>
           
</div>
        
</template>
<script>
import { mapGetters } from "vuex";

import{GET_PRODUCT_BY_ID} from '../../store/actions.type'
export default {
  props: {
    slug: {
        type: String,
        required: true
      },
      id:{
          type: Number,
        required: false
      }
  },
  data() {
    return {};
  },
   mounted () {
      this.$store.dispatch(GET_PRODUCT_BY_ID,this.id)
    },
    computed: {
      ...mapGetters([
        'productById'
      ])
    }
};
</script>
