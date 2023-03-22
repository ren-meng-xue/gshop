<template>
  <footer class="footer_guide border-1px">
    <div v-for="(item,index) in router" :key="index" class="guide_item" @click="goto(item.path)"
    :class="{on:isCurrent(item.path)}"
    >
      <span class="item_icon">
        <i class="iconfont " :class="item.icon"></i>
      </span>
      <span>{{item.name}}</span>
    </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        router:[
          {
            name:'首页',
            path:'/msite',
            icon:'icon-waimai'
          },
          {
            name:'搜索',
            path:'/search',
            icon:'icon-search'
          },
          {
            name:'订单',
            path:'/order',
            icon:'icon-dingdan'
          },
          {
            name:'我的',
            path:'/profile',
            icon:'icon-geren'
          },
        ]
      }
    },
    methods: {
      goto(path) {
        //跳转没有记录
        this.$router.replace(path)
      },
      isCurrent(path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>