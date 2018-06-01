<template>
  <div class="classify">
    <div class="headerTop">
      <div class="header">
        <i></i>
        <span>搜索商品，共9723款好物</span>
      </div>
    </div>
    <div class="classifyShopList">
      <ClassifyLeft ></ClassifyLeft>
      <ClassifyRight></ClassifyRight>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'


  import ClassifyLeft from '../../components/ClassifyLeft/ClassifyLeft.vue'
  import ClassifyRight from '../../components/ClassifyRight/ClassifyRight.vue'

  export default {
    components: {
      ClassifyLeft,
      ClassifyRight
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  $rem = (375/10)rem
  .classify
    width 100%
    height 100%
    background white
    overflow hidden
    .headerTop
      width 100%
      height (44/$rem)
      box-sizing border-box
      padding (0 15/$rem)
      display flex
      align-items center
      justify-content center
      position fixed
      .header
        width 100%
        height (28/$rem)
        border-radius (10/$rem)
        background #ededed
        display flex
        align-items center
        justify-content center
        i
          background-image url("images/search.png")
          background-size 100%
          display inline-block
          width (14/$rem)
          height (14/$rem)
          margin-right (5/$rem)
        span
          font-size (14/$rem)
    .classifyShopList
      width 100%
      height 100%
      box-sizing border-box
      display flex
      flex-wrap nowrap
      margin-top (44/$rem)
      padding-bottom (25/$rem)


</style>
