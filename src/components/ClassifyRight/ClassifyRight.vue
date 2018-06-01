<template>
  <div class="classifyInfo" >
    <div class="containerScroll" v-if="classList[nums]">
      <div class="classifyImg" :style="{backgroundImage: `url(${classList[nums].bannerUrl})`}">
      </div>
      <div class="classifyShow">
        <div class="classifyTitle">
          <span>{{classList[nums].name}}</span>
        </div>
        <div class="scroll">
          <ul>
            <li v-for="(item,index) in classList[nums].subCateList" :key="index">
              <a href="javascript:;">
                <img :src="item.wapBannerUrl">
                <span>{{item.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        nums:3
      }
    },
    computed: {
      ...mapState(['classList','num'])
    },
    watch:{
      num(value){
        this.nums=value
      }
    },
    mounted () {
      this.$store.dispatch('getClassList')
      this.$nextTick(() => {
        new BScroll('.scroll', {
          click:true,
          scrollY: true
        })
      })
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  $rem = (375/10)rem
  .classifyInfo
    width (264/$rem)
    height (573/$rem)
    box-sizing border-box
    padding (15/$rem 15/$rem 10/$rem 15/$rem)
    .containerScroll
      .classifyImg
        width 100%
        height (96/$rem)
        background-size 100% 100%
      .classifyShow
        width 100%
        .classifyTitle
          width 100%
          height (54/$rem)
          display flex
          justify-content center
          align-items center
          span
            font-size (12/$rem)
        .scroll
          width 100%
          height (390/$rem)
          overflow hidden
          ul
            width 100%
            display flex
            flex-wrap wrap
            li
              width (72/$rem)
              height (108/$rem)
              margin-right (6/$rem)
              box-sizing border-box
              a
                display flex
                flex-direction column
                justify-content center
                align-items center
                img
                  width (72/$rem)
                  height (72/$rem)
                span
                  font-size (12/$rem)

</style>
