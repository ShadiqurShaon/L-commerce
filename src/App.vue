<template>
<div id="app">
<appheader></appheader>
<navbar></navbar>
<router-view></router-view>
<appfooter></appfooter>
</div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Navbar from './components/Navbar.vue'

// 


export default {
  components:{
    appheader:Header,
    appfooter:Footer,
    navbar:Navbar
  },
  name: 'app',
  data () {
    return {
      
    }
  },
  methods:{
    gatdata:function(){
      Vue.axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
  console.log(response.data)
})
    }
  }
}
</script>


