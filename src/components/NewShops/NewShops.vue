<template>
  <div>
    <div class="newShops">
      <div class="headLine">
        <a href="javascript:;">
          <span class="newFirst">新品首发</span>
          <div class="newAll">
            <span class="newBox">
              <span class="newIn">查看全部</span>
              <i></i>
            </span>
          </div>
        </a>
      </div>
      <div class="newList">
        <ul>
          <li v-for="(newPublish, index) in newPublishs" :key="index">
            <a href="javascript:;">
              <div class="shapImage">
                <img :src="newPublish.listPicUrl"/>
              </div>
              <div class="wrapper">
                <p>十点一刻</p>
              </div>
              <p class="shopName">{{newPublish.name}}</p>
              <p class="adver">{{newPublish.simpleDesc}}</p>
              <p class="price">¥{{newPublish.retailPrice}}</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="showAll">
              <span>查看全部</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="newShops">
      <div class="headLine headLine1">
        <a href="javascript:;">
          <span class="newFirst">人气推荐，好物推荐</span>
          <div class="newAll">
            <span class="newBox">
              <span class="newIn">查看全部</span>
              <i></i>
            </span>
          </div>
        </a>
      </div>
      <div class="newList newList1">
        <ul>
          <li v-for="(good,index) in goods" :key="index">
            <a href="javascript:;">
              <div class="shapImage">
                <img :src="good.listPicUrl"/>
              </div>
              <div class="wrapper">
                <p>十点一刻</p>
              </div>
              <p class="shopName">{{good.name}}</p>
              <p class="adver">{{good.simpleDesc}}</p>
              <p class="price">¥{{good.retailPrice}}</p>
            </a>
          </li>
          <li>
            <a href="javascript:;" class="showAll">
              <span>查看全部</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      this.$store.dispatch('getNewPublish')
      this.$store.dispatch('getFineGoods')
      this.$nextTick(() => {
        new BScroll('.newList', {
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough:'vertical'
        })
        new BScroll('.newList1', {
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough:'vertical'
        })
      })
    },
    computed: {
      ...mapState(['newPublishs','goods'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/stylus/stylus.styl"
  $rem = (375/10)rem
  .newShops
    width 100%
    background: white
    margin-bottom (10/$rem)
    .headLine
      width 100%
      height (130/$rem)
      margin-bottom (16/$rem)
      display flex
      justify-content center
      align-items center
      background-image url("images/bitmap1.png")
      background-size 100% 100%
      &.headLine1
        background-image url("images/bitmap2.png")
        background-size 100% 100%
      a
        display block
        text-align center
        .newFirst
          font-size (18/$rem)
        .newAll
          width (120/$rem)
          height (28/$rem)
          margin-top (8/$rem)
          background #D8E5F1
          box-sizing border-box
          display flex
          justify-content center
          align-items center
          .newBox
            display flex
            width (64/$rem)
            height (28/$rem)
            justify-content center
            align-items center
            .newIn
              font-size (14/$rem)
              display flex
            i
              background-image url("images/indexNewArrow.png")
              background-size 100% 100%
              display flex
              width (5/$rem)
              height (11/$rem)
              margin-left (3/$rem)
    .newList
      width 100%
      height (240/$rem)
      ul
        /*display flex
        flex-wrap nowrap*/
        //clearFix()
        float left
        white-space nowrap
        li
          overflow hidden
          /*box-sizing border-box*/
          width (140/$rem)
          height (230/$rem)
          margin-left (15/$rem)
          display inline-block
          a
            display inline-block
            width (140/$rem)
            height (230/$rem)
            .shapImage
              width 100%
              height (140/$rem)
              background #f4f4f4
              img
                width 100%
            .wrapper
              width 100%
              height(15/$rem)
              padding-left (5/$rem)
              margin-bottom (8/$rem)
              p
                display inline-block
                font-size (10/$rem)
                background #f48f18
                color white
                padding (2/$rem 8/$rem)
                margin (0 0 1/$rem 6/$rem)
            .shopName
              margin (5/$rem 0)
              padding (0 5/$rem)
              height (16/$rem)
              font-size (14/$rem)
              line-height (17/$rem)
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .adver
              padding (0 5/$rem)
              margin-bottom (14/$rem)
              font-size (14/$rem)
            .price
              padding (0 5/$rem)
              font-size (14/$rem)
              color red
            &.showAll
              width (132/$rem)
              height (132/$rem)
              border 1px gray solid
              text-align center
              line-height (132/$rem)
              span
                font-size (14/$rem)
</style>
