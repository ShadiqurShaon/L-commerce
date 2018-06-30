<template>
    <div id="home-global">
        {{user}}
        <button @click="fetcData()"></button>
        </div>    
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
export default {
  name: "home-global",

  components: {},
  data() {
    return {
        user:[]
    };
  },
  computed: {
    globalPost: function() {
     Vue.axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            console.log(response.data)
           this.user = response.data
        });
    }
  },
  methods: {
      fetcData: function() {
     Vue.axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            console.log(response.data)
           this.user = response.data
        });
    
  }
}
}
</script>

 
