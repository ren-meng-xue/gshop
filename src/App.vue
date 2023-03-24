<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';
import { mapActions } from 'vuex';
export default {
  components: {
    FooterGuide
  },
  methods: {
    ...mapActions(['getAddress'])
  },
  mounted() {
    this.$store.dispatch('getAddress');
    // this.getAddress();
  },
  created() {}
};
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
