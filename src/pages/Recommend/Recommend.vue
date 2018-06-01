<template>
  <div class="recommend" >
    <div class="recommendSearch">
      <div class="header">
        <a href="javascript:;" class="icon_home"></a>
        <a href="javascript:;" class="icon_img"></a>
        <div>
          <a href="javascript:;" class="icon_search"></a>
          <a href="javascript:;" class="icon_cart"></a>
        </div>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(recommenies,index) in recommends" :key="index">
          <a :href="recommenies.schemeUrl">
            <img :src="recommenies.picUrl">
            <div class="active">
              <div class="subTitle">{{recommenies.subTitle}}</div>
              <div class="title">{{recommenies.title}}</div>
              <div class="desc">{{recommenies.desc}}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="recommend_list">
      <ul>
        <li v-for="(item,index) in scrolls" :key="index">
          <a href="javascript:;">
            <div class="recommend_img" :style="{backgroundImage: `url(${item.picUrl})` }"></div>
            <div class="recommend_count">{{item.articleCount}}</div>
            <div class="recommend_from">{{item.title}}</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="recommend_foryou"  v-if="one.one && two.two && three.three">
      <div class="container">
        <div class="recommend_head">为你推荐</div>
        <a :href="one.one.schemeUrl" class="recommend_top">
          <div class="recommend_bigimg">
            <img :src="one.one.picUrl" >
            <div>{{one.one.typename}}</div>
          </div>
          <div class="recommend_description">
            <p class="recommend_title">{{one.one.title}}</p>
            <p class="recommend_info">{{one.one.priceInfo}}元起</p>
            <p class="recommend_more">{{one.one.subTitle}}</p>
          </div>
        </a>
        <a :href="two.two.schemeUrl" class="recommend_bottom">
          <div class="left">
            <div class="left_one">
              <div class="avatarTit" :style="{backgroundImage:`url(${two.two.avatar})`}">
              </div>
              <p>{{two.two.nickname}}</p>
            </div>
            <p class="left_two">{{two.two.title}}</p>
            <p class="left_three">{{two.two.subTitle}}</p>
          </div>
          <div class="right">
            <div class="right_img">
              <img :src="two.two.picUrl" >
            </div>
            <div class="right_title">
              {{two.two.typeName}}
            </div>
          </div>
        </a>
        <a :href="three.three.schemeUrl" class="recommend_bottom">
          <div class="left">
            <div class="left_one">
              <div class="avatarTit" :style="{backgroundImage:`url(${three.three.avatar})`}">
              </div>
              <p>{{three.three.nickname}}</p>
            </div>
            <p class="left_two">{{three.three.title}}</p>
            <p class="left_three">{{three.three.subTitle}}</p>
          </div>
          <div class="right">
            <div class="right_img">
              <img :src="three.three.picUrl" >
            </div>
            <div class="right_title">{{three.three.typeName}}</div>
          </div>
        </a>
      </div>
    </div>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    computed: {
      ...mapState(['recommends','scrolls','one','two','three'])
    },
    mounted() {
      this.$store.dispatch('getRecommed')
      this.$store.dispatch('getScroll')
      this.$store.dispatch('getRecomOne')
      this.$store.dispatch('getRecomTwo')
      this.$store.dispatch('getRecomThree')
      this.$nextTick(() => {
        new BScroll('.recommend_list', {
          click: true,
          scrollX: true,
          eventPassthrough:'vertical'
        })
      })
      const {recommends} = this
      console.log(recommends)
    },
    watch: {
      scrolls(value) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
          })
        })
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  $rem = (375/10)rem
  .recommend
    width 100%
    background #f4f4f4
    overflow hidden
    .recommendSearch
      width 100%
      height (44/$rem)
      background white
      position fixed
      .header
        width 100%
        height 100%
        box-sizing border-box
        padding (0 8/$rem 0 12/$rem)
        position fixed
        .icon_home
          width (24/$rem)
          height (22/$rem)
          display inline-block
          background-image url("images/hd-s342878591a-9af1a97852.png")
          background-position (-1/$rem -34/$rem)
          background-repeat no-repeat
          background-size (80/$rem)
        .icon_img
          display inline-block
          width (96/$rem)
          height (27/$rem)
          margin (9/$rem 145/$rem)
          background-image url("images/hd-s342878591a-9af1a97852.png")
          background-position (-1/$rem -76/$rem)
          background-repeat no-repeat
          background-size (100/$rem)
          position absolute
          left (-12/$rem)
        div
          width (74/$rem)
          height (32/$rem)
          margin (0 2/$rem 0 267/$rem)
          display inline-block
          position absolute
          .icon_search
            width (24/$rem)
            height (22/$rem)
            display inline-block
            background-image url("images/hd-s342878591a-9af1a97852.png")
            background-position (-1/$rem -160/$rem)
            background-repeat no-repeat
            background-size (80/$rem)
            margin-right (5/$rem)
          .icon_cart
            width (24/$rem)
            height (22/$rem)
            display inline-block
            background-image url("images/hd-s342878591a-9af1a97852.png")
            background-position (-4/$rem -6/$rem)
            background-repeat no-repeat
            background-size (80/$rem)


    .swiper-container
      width 100%
      height (216/$rem)
      padding-top (44/$rem)
      .swiper-wrapper
        width (345/$rem)
        height 100%
        box-sizing border-box
        margin (0 15/$rem)
        padding (12/$rem 0)
        position relative
        .swiper-slide
          padding (0 5/$rem)
          box-sizing border-box
          a
            img
              width 100%
            .active
              width (233/$rem)
              height (100/$rem)
              background white
              display flex
              flex-direction column
              justify-content center
              align-items center
              position absolute
              left 0
              right 0
              top 0
              bottom 0
              margin auto
              .subTitle
                padding (0 4/$rem)
                font-size (10/$rem)
              .title
                margin-top (8/$rem)
                font-size (16/$rem)
                font-weight bold
                color #333
              .desc
                margin-top (2/$rem)
                font-size (12/$rem)
    .recommend_list
      width (345/$rem)
      height (113/$rem)
      padding (16/$rem 15/$rem 14/$rem 15/$rem)
      margin-bottom (10/$rem)
      background white
      ul
        float left
        white-space nowrap
        li
          display inline-block
          width (82/$rem)
          height (105/$rem)
          margin-right (12/$rem)
          a
            width 100%
            height 100%
            display inline-block
            position relative
            .recommend_img
              width 100%
              height (82/$rem)
              margin-bottom (11/$rem)
              background-size 100%
            .recommend_count
              width (58/$rem)
              height (16/$rem)
              font-size (12/$rem)
              position absolute
              top 0
              right 0
            .recommend_from
              width (92/$rem)
              height (12/$rem)
              font-size (12/$rem)
              margin-left (-10/$rem)
    .recommend_foryou
      width (345/$rem)
      height (652/$rem)
      padding (0 15/$rem 20/$rem 15/$rem)
      margin-bottom (10/$rem)
      background white
      .container
        width 100%
        height 100%
        .recommend_head
          width 100%
          height (60/$rem)
          font-size (16/$rem)
          text-align center
          line-height (60/$rem)

        .recommend_top
          display inline-block
          width 100%
          height (286/$rem)
          border 1px #d9d9d9 solid
          border-radius (10/$rem)
          overflow hidden
          margin-bottom (15/$rem)
          .recommend_bigimg
            width 100%
            height (193/$rem)
            position relative
            img
              width 100%
            div
              position absolute
              top (10/$rem)
              left (10/$rem)
              width (65/$rem)
              height (18/$rem)
              border 1px #d9d9d9 solid
              background white
              padding (0 8/$rem)
              font-size (12/$rem)
              border-radius (10/$rem)

          .recommend_description
            width (324/$rem)
            padding (12/$rem 10/$rem 34/$rem 10/$rem)
            .recommend_title
              width (235/$rem)
              height (21/$rem)
              margin (0 15/$rem 10/$rem 0)
              font-size (18/$rem)
              display inline-block
            .recommend_info
              height (21/$rem)
              font-size (18/$rem)
              margin-bottom (10/$rem)
              display inline-block
              overflow hidden
            .recommend_more
              font-size (14/$rem)
        .recommend_bottom
          width (344/$rem)
          height (136/$rem)
          margin-bottom (15/$rem)
          display inline-block
          border 1px #d9d9d9 solid
          position relative
          .left
            width (190/$rem)
            height (136/$rem)
            padding (0 15/$rem 0 10/$rem)
            box-sizing border-box
            overflow hidden
            position relative
            display flex
            flex-wrap wrap
            .left_one
              width 100%
              height (24/$rem)
              margin-bottom (12/$rem)
              display flex
              flex-wrap nowrap
              align-items center
              .avatarTit
                width (23/$rem)
                height (23/$rem)
                border 1px #d9d9d9 solid
                border-radius 50%
                margin-right (4/$rem)
                overflow hidden
                background-size 100%
              p
                height (12/$rem)
                font-size (10/$rem)
                color #333

            .left_two
              margin-bottom (7/$rem)
              font-size (16/$rem)
              white-space nowrap
              overflow hidden
              text-overflow  ellipsis
            .left_three
              font-size (12/$rem)
              overflow  hidden
              text-overflow ellipsis
              white-space nowrap
          .right
            position absolute
            width (140/$rem)
            height (136/$rem)
            top 0
            right 0
            .right_img
              width 100%
              height 100%
              img
                width 100%
            .right_title
              position absolute
              top (5/$rem)
              left (5/$rem)
              font-size (12/$rem)
              border 1px #d9d9d9 solid
              background white
              padding (0 8/$rem)
              border-radius (15/$rem)

</style>
