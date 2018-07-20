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
      <td><button type="button" class="btn btn-primary">+</button> <button type="button" class="btn btn-danger">-</button>
      </td>
      <td><button type="button" class="btn btn-warning">Remove</button></td>
    </tr>
  </tbody>
</table>

   {{getCart}}
</div>
</template>
<script>
import { mapGetters } from 'vuex'
    export default{
            data(){
                return{

                }
            },
            computed:{
                ...mapGetters([
                    'getCart'
                ])
            }
    }
</script>
