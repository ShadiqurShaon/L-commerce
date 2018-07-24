<template>
<div class="container">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quent</th>
      <th scope="col">Remove Product</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product,index) in getCart" :key="index" style="height:50px;width:50px;text-aligh:center">
      <th><img :src="`/static/photos/${product.image}`" alt="" style="height:45px;width:45px;" /></th>
      <td>{{product.name}}</td>
      <td>{{product.price}}</td>
      <td>{{product.quant}}  <button style="margin:5px;margin-left:10px" @click="addQuant(product.id)" type="button" class="btn btn-primary">+</button> <button @click="removeQuant(product)" type="button" class="btn btn-danger" v-bind:disabled="product.quant>1 ? false:true">-</button>
      </td>
      <td><button @click="removeProduct(product)" type="button" class="btn btn-warning">Remove</button></td>
    </tr>
  </tbody>
</table>
<div class="container">
    <div class="row">
      <div class="col-sm-6">
     <router-link
                  :to="{name: 'home'}"
                  exact
                  class="btn btn-primary"
                  active-class="active">
                  Continue Shoping
                </router-link>
    </div>
    <div class="col-sm-6">
     <router-link
                  :to="{name: '/continue-shopping'}"
                  exact
                  class="btn btn-success"
                  active-class="active">
                  Continue
                </router-link>
    </div>
    </div>
</div>

<router-view></router-view>
  
</div>
</template>
<script>
import { mapGetters } from "vuex";
import { REMOVE_PRODUCT,ADD_QUANT,REMOVE_QUANT } from "../../store/actions.type";

export default {
  computed: {
    ...mapGetters(["getCart"])
  },
  data() {
    return {};
  },
  methods: {
    removeProduct:function(data) {
      return this.$store.dispatch(REMOVE_PRODUCT, data);
    },
  addQuant:function(id){
    return this.$store.dispatch(ADD_QUANT,id)
  },
  removeQuant:function(product){
    if(product.quant>1){

      return this.$store.dispatch(REMOVE_QUANT,product.id)
    }
  }
  }
};
</script>
