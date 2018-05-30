<template>
  <div class="home">
    <div class="top_scroll">
      <div class="headSearch">
        <a href="javascript:;" class="logo"></a>
        <div class="topSearch">
          <i></i>
          <span>搜索物品，共9767件好物</span>
        </div>
      </div>
      <div class="listContent">
        <ul>
          <li class="list_item" v-for="(topScroll,index) in topScrolls" :key="index" >
            <a href="javascript:;">
              <span>{{topScroll.name}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="head_swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(carousel,index) in carousels" :key="index">
            <a :href="carousel.targetUrl">
              <img :src="carousel.picUrl"></img>
            </a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="server_policy">
        <ul>
          <li class="item"><a href="javascript:;">
            <i></i>
            <span>网易自营品牌</span>
          </a></li>
          <li class="item"><a href="javascript:;">
            <i></i>
            <span>30天无忧退货</span>
          </a></li>
          <li class="item"><a href="javascript:;">
            <i></i>
            <span>48小时快速退款</span>
          </a></li>
        </ul>
      </div>
    </div>
    <div class="supply">
      <div class="header">
        <a href="javascript:;">
          <span>品牌制造商直供</span>
          <i></i>
        </a>
      </div>
      <div class="supplying">
        <ul>
          <li v-for="(List,index) in tagListArr" :key="index">
            <a href="javascript:;">
              <div>
                <p>{{List.name}}</p>
                <p>{{List.floorPrice}}元起</p>
              </div>
              <img :src="List.picUrl"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <NewShops ></NewShops>
    <div class="limit">
      <a href="javascript:;">
        <div class="indexLimit">
          <div class="left-item">
            <div class="title">严选限时购</div>
            <div class="count_time">
              <span class="hours times">00</span>
              <span class="colon">:</span>
              <span class="mins times">00</span>
              <span class="colon">:</span>
              <span class="secs times">00</span>
            </div>
            <div class="next_time">
              <span>下一行 10:00 开始</span>
            </div>
          </div>
          <div class="right-item">
            <img :src="timelimit.primaryPicUrl" />
            <div>
              <span class="rmb1">￥{{timelimit.activityPrice}}</span>
              <span class="rmb2">￥{{timelimit.originPrice}}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="well">
      <a href="javascript:;">
        <img src="../../assets/images/well.jpg">
      </a>
    </div>
    <div class="choice">
      <header class="choice_title">
        <a href="javascript:;">
          <span>专题精选</span>
          <i></i>
        </a>
      </header>
      <div class="choice_list">
        <ul>
          <li v-for="(choice,index) in choices" :key="index">
            <a href="javascript:;" class="choice_img">
              <img :src="choice.itemPicUrl" />
            </a>
            <div class="choice_adver">
              <span>{{choice.title}}</span>
              <span>{{choice.priceInfo}}元起</span>
            </div>
            <p>{{choice.subtitle}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="shopClass" v-for="(shop,index) in shops" :key="index">
      <div class="shopTitle">{{shop.name}}好物</div>
      <div class="shopFirstPage">
        <ul>
          <li v-for="(item,index) in shop.itemList" :key="index" v-if="index<7">
            <a href="javascript:;">
              <div class="shopInfo">
                <img :src="item.listPicUrl"/>
                <p>{{item.simpleDesc}}</p>
              </div>
              <div class="shopActive" v-if="item.itemTagList">
                <p>{{item.itemTagList.name}}</p>
              </div>
              <div class="shopTrait">
                <span>{{item.name}}</span>
              </div>
              <div class="shopPrice">
                <span>￥{{item.retailPrice}}</span>
              </div>
            </a>
          </li>
          <li class="showMore">
            <a href="javascript:;">
              <p>更多{{shop.name}}好物</p>
              <i></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="appAdress">
        <a href="javascript:;">下载APP</a>
        <a href="javascript:;">电脑版</a>
      </div>
      <div class="copyright">
        <span>网易公司版权所有 © 1997-2018</span>
        <br>
        <span>食品经营许可证：JY13301080111719</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'


  import NewShops from '../../components/NewShops/NewShops.vue'
  export default {
    data(){
        return {
        isShow:false,
      }
    },
    computed : {
      ...mapState(['topScrolls','carousels','tagList','timelimit',
      'choices','shops']),
      tagListArr() {
        const {tagList} = this
        return tagList.slice(0,4)
      },
    },

    mounted () {
      this.$store.dispatch('getTopScroll',()=>{
        this.$nextTick(()=>{
          const liNodes = document.querySelectorAll('.listContent > ul > li')
          const ul = document.querySelector('.listContent > ul ')
          let h = 15
          for(let i = 0;i<liNodes.length;i++){
            h+=(liNodes[i].offsetWidth+25)
          }
          ul.style.width=h+'px'
          console.log('h='+h)
        })

      })
      this.$store.dispatch('getCarousel')
      this.$store.dispatch('getTrademark')
      this.$store.dispatch('getTimes')
      this.$store.dispatch('getChoice')
      this.$store.dispatch('getShopList')

      this.$nextTick(() => {
        new BScroll('.listContent', {
          click: true,
          scrollX: true
        })
        new BScroll('.choice_list', {
          click: true,
          scrollX: true,
          eventPassthrough:'vertical'
        })

    })
    },
    watch: {
      carousels(value) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })

      }
    },
    methods: {
      addClass() {
        this.isShow =!this.isShow

        }
      },
    components: {
      NewShops
    }
  }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  $rem = (375/10)rem
  .home
    background #f4f4f4
    overflow hidden
    .top_scroll
      width 100%
      position fixed
      z-index 100
      top 0
      left 0
      .headSearch
        background white
        width (375/$rem)
        height (40/$rem)
        padding (8/$rem 15/$rem)
        display flex
        flex-wrap nowrap
        .logo
          display flex
          align-items center
          width (68/$rem)
          height (20/$rem)
          background-image url("images/indexLogo.png")
          background-size 100% 100%
          margin-right  (10/$rem)
        .topSearch
          display flex
          align-items center
          width (266/$rem)
          height (30/$rem)
          border-radius (10/$rem)
          justify-content center
          line-height (20/$rem)
          background #ededed
          i
            display inline-block
            width (14/$rem)
            height (14/$rem)
            background-image url("images/search.png")
            background-size 100% 100%
          span
            font-size (14/$rem)
      .listContent
        width 100%
        background white
        padding (0 0 15/$rem 15/$rem)
        margin-top -1px
        ul
          display flex
          flex-wrap nowrap

          li
            display inline-block
            white-space nowrap
            font-size (16/$rem)
            width (44/$rem)
            &.list_item:not(:first-of-type)
              margin-left (25/$rem)
            span
              padding (0 10/$rem)
              &.on
                color: red
                ::after
                  width 100%
                  height 1px
                  background red
    .head_swiper
      margin-bottom (10/$rem)
      margin-top (82/$rem)
      .swiper-container
        box-sizing border-box
        width 100%
        height (200/$rem)
        border (1px 0)
        padding (10/$rem 0 15/$rem 0)
        .swiper-wrapper
          .swiper-slide
            img
              width 100%
      .server_policy
        background white
        width (345/$rem)
        height (35/$rem)
        padding (0 15/$rem)
        ul
          display flex
          align-items center
          height (35/$rem)
          .item
            float left
            font-size (12/$rem)
            width (115/$rem)
            height (18/$rem)
            i
              display inline-block
              vertical-align middle
              width (16/$rem)
              height (16/$rem)
              background-image url("images/cae.png")
              background-size 100% 100%
            span
              display inline-block
              vertical-align middle
              margin-left (4/$rem)
              height (16/$rem)

    .supply
      background white
      width (375/$rem)
      height (295/$rem)
      margin-bottom (10/$rem)
      .header
        width 100%
        height (55/$rem)
        display flex
        justify-content center
        align-items center
        a
          display flex
          span
            display inline-block
            font-size (16/$rem)
            vertical-align middle
          i
            display inline-block
            width (15/$rem)
            height (15/$rem)
            margin-left (5/$rem)
            background-image url("images/go2.png")
            background-size 100%
            vertical-align middle
      .supplying
        background white
        width (375/$rem)
        height (244/$rem)
        padding-bottom (4/$rem)
        ul
          width (360/$rem)
          height (234/$rem)
          margin (0 8/$rem)
          li
            width (176/$rem)
            height (118/$rem)
            background #f4f4f4
            margin (0 4/$rem 4/$rem 0)
            float left
            a
              position relative
              div
                position absolute
                left 0
                right 0
                padding (10/$rem 0 0 10/$rem)
                z-index 4
                p
                  font-size (14/$rem)
                  margin-bottom (3/$rem)
                .icon_supply
                  display block
                  width (32/$rem)
                  height (16/$rem)
                  margin-top (5/$rem)
                  background-image url("images/new.png")
                  background-size 100% 100%

              img
                width 100%




    .limit
      margin-bottom (10/$rem)
      width 100%
      height (190/$rem)
      background white
      a
        .indexLimit
          padding (15/$rem 20/$rem 15/$rem 28/$rem)
          margin-bottom (10/$rem)
          box-sizing border-box
          width 100%
          height 100%
          .left-item
            padding-top (40/$rem)
            width (167/$rem)
            height (120/$rem)
            float left
            .title
              width 100%
              height (18/$rem)
              margin-bottom (12/$rem)
              font-size (18/$rem)
            .count_time
              width 100%
              height (28/$rem)
              display block
              span
                width (10/$rem)
                height (22/$rem)
                font-size (15/$rem)
                text-align center
                line-height (22/$rem)
                float left
                &.times
                  display inline-block
                  width (31/$rem)
                  height (28/$rem)
                  background black
                  color white
            .next_time
              width 100%
              height (12/$rem)
              margin-top (20/$rem)
              font-size (12/$rem)

          .right-item
            width (160/$rem)
            height (160/$rem)
            float right
            background #f4f4f4
            position relative
            img
              width 100%
            div
              width (48/$rem)
              height (48/$rem)
              border-radius 50%
              background rgba(244,143,24,.95)
              position absolute
              right (10/$rem)
              bottom (18/$rem)
              display flex
              flex-direction column
              align-items center
              justify-content center
              span
                font-size (14/$rem)
                color white
    .well
      width 100%
      height (150/$rem)
      margin-bottom (10/$rem)
      img
        width 100%
    .choice
      width 100%
      height (282/$rem)
      margin-bottom (10/$rem)
      background white
      .choice_title
        width 100%
        height (55/$rem)
        display flex
        justify-content center
        align-items center
        a
          width (84/$rem)
          height (24/$rem)
          display flex
          justify-content center
          align-items center
          span
            font-size (16/$rem)
          i
            display inline-block
            width (15/$rem)
            height (15/$rem)
            margin-left (5/$rem)
            background-image: url('images/go2.png')
            background-size 100%
      .choice_list
        width 100%
        height (208/$rem)
        padding (0 15/$rem 18/$rem 15/$rem)
        ul
          float left
          white-space nowrap
          li
            display inline-block
            width (287/$rem)
            height (208/$rem)
            margin-right (10/$rem)
            overflow hidden
            a
              width 100%
              height (161/$rem)
              margin-bottom (8/$rem)
              overflow hidden
              display block
              img
                width 100%
                height (195/$rem)
                display block
            .choice_adver
              width 100%
              height (20/$rem)
              font-size (14/$rem)
              span:nth-child(2)
                float right
                color red
            p
              width 100%
              height (18/$rem)
              font-size (12/$rem)
    .shopClass
      width 100%
      margin-bottom (10/$rem)
      background white
      .shopTitle
        width 100%
        height (60/$rem)
        color #515151
        font-size (14/$rem)
        text-align center
        line-height (60/$rem)
      .shopFirstPage
        width 100%
        ul
          width 100%
          display flex
          flex-wrap wrap
          li
            width (172/$rem)
            height (277/$rem)
            padding (0 7/$rem 16/$rem 7/$rem)
            a
              .shopInfo
                img
                  width 100%
                  background #f4f4f4
                p
                  width 100%
                  height (14/$rem)
                  padding (10/$rem 5/$rem)
                  background #F1ECE2
                  font-size (12/$rem)

              .shopActive
                width 100%
                height (15/$rem)
                padding-left (5/$rem)
                margin (10/$rem 0 0 2/$rem)
                p
                  width (30/$rem)
                  height (10/$rem)
                  padding (2/$rem 8/$rem)
                  margin-bottom (1/$rem)
                  background #f48f18
                  font-size (10/$rem)
                  color white
              .shopTrait
                height (24/$rem)
                line-height (24/$rem)
                font-size (14/$rem)
                padding (0 5/$rem)
                margin-top (5/$rem)
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
              .shopPrice
                height (16/$rem)
                font-size (16/$rem)
                color red
            &.showMore
              a
                padding (64/$rem 0)
                display flex
                flex-direction column
                justify-content center
                align-items center
                p
                  height (16/$rem)
                  margin-bottom (30/$rem)
                  color #333
                  font-size (16/$rem)
                i
                  display inline-block
                  width (33/$rem)
                  height (33/$rem)
                  background-image url("images/goodGridMore.png")
                  background-size 100%
    .footer
      width 100%
      height (122/$rem)
      background #414141
      padding (27/$rem 5/$rem 14/$rem 5/$rem)
      box-sizing border-box
      margin-bottom (50/$rem)
      .appAdress
        width 100%
        height (31/$rem)
        display flex
        justify-content center
        a
          display block
          width (85/$rem)
          height (30/$rem)
          text-align center
          line-height (30/$rem)
          margin-right (25/$rem)
          border 1px solid #999
          color white
          font-size (12/$rem)
      .copyright
        font-size (12/$rem)
        color #999
        height (32/$rem)
        margin-top  (18/$rem)
        text-align center
</style>
