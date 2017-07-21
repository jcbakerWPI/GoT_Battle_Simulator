<template>
  <div id="wrapper">
    <NavBar></NavBar>
    <router-view></router-view>
    <router-view name="description"></router-view>
    <router-view name="service"></router-view>
    <div style="height:200px">
    </div>
    <Footer></Footer>
  </div>
</template>

<script>


import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer,
  }
 }
</script>

<style lang="scss">
  @import "./global.css"
</style>

