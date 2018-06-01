<template>
  <div class="footer_guide">
    <span class="guide_item"  @click="goTo('/home')">
      <span class="sprite1" :class="{on: '/home' ===$route.path}"></span>
      <span :class="{redFont:'/home' ===$route.path}">首页</span>
    </span>
    <span class="guide_item"  @click="goTo('/recommend')">
      <span class="sprite2" :class="{on: '/recommend' ===$route.path}"></span>
      <span :class="{redFont:'/recommend' ===$route.path}">识物</span>
    </span>
    <span class="guide_item" @click="goTo('/classify')">
      <span class="sprite3"  :class="{on: '/classify' ===$route.path}"></span>
      <span :class="{redFont:'/classify' ===$route.path}">分类</span>
    </span>
    <span class="guide_item"  @click="goTo('/cart')">
      <span class="sprite4" :class="{on: '/cart' ===$route.path}"></span>
      <span :class="{redFont:'/cart' ===$route.path}">购物车</span>
    </span>
    <span class="guide_item"  @click="goTo('/profile')">
      <span class="sprite5"></span>
      <span>个人</span>
    </span>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   $rem = (375/10)rem
  .footer_guide
    display flex
    position fixed
    z-index 200
    left 0
    bottom 0
    right 0
    width 100%
    height 50px
    background-color #fff
    .guide_item
      display flex
      flex-direction column
      flex 1
      text-align center
      align-items center
      font-size (12/$rem)
      .sprite1
        width (20/$rem)
        height (30/$rem)
        background-image url("./images/tabBar.png")
        background-size (20/$rem)
        background-position  (1/$rem -120/$rem)
        &.on
          background-position  (1/$rem -95/$rem)
      .sprite2
        width (20/$rem)
        height (30/$rem)
        background-image url("./images/tabBar.png")
        background-size (20/$rem)
        background-position  (1/$rem -170/$rem)
        &.on
          background-position  (1/$rem -145/$rem)
      .sprite3
        width (20/$rem)
        height (30/$rem)
        background-image url("./images/tabBar.png")
        background-size (20/$rem)
        background-position  (1/$rem -70/$rem)
        &.on
          background-position  (1/$rem -45/$rem)
      .sprite4
        width (20/$rem)
        height (30/$rem)
        background-image url("./images/tabBar.png")
        background-repeat no-repeat
        background-size (20/$rem)
        background-position  (1/$rem -20/$rem)
        &.on
          background-position  (1/$rem 5/$rem)
      .sprite5
        width (20/$rem)
        height (30/$rem)
        background-image url("./images/tabBar.png")
        background-repeat no-repeat
        background-size (20/$rem)
        background-position  (1/$rem -220/$rem)

      .redFont
        color red
</style>
