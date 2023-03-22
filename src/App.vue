<!-- eslint-disable quotes -->
<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from '../src/components/FooterGuide/index.vue';
export default {
  // eslint-disable-next-line quotes
  name: 'App',
  components: {
    FooterGuide
  }
};
</script>
<style lang="stylus" rel="stylesheet">
#app
    width:100%
    height 100%
    background:#f5f5f5
    position relative
</style>
