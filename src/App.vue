<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
 import FooterGuide from './components/FooterGuide/FooterGuide.vue'
 import store from './store/index.js'
  export default {
    components:{
      FooterGuide
    },
    mounted () {
   },
   created () {

    console.log(this,'this');
    // console.log(store.dispatch('getAddress'));
    // console.log(store.state.address);
 }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>