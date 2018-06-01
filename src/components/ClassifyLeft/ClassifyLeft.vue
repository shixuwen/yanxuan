<template>
  <div class="classifyList">
    <ul>
      <li v-for="(classifys,index) in classList" :key="index" @click="listInfo(index)">
        {{classifys.name}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {

      }
    },
    computed: {
      ...mapState(['classList','num'])
    },
    methods: {
      listInfo(index) {
        console.log('index='+index)
        this.$store.dispatch('getNum',index)
        console.log('num'+this.num)
      },

    },
    mounted () {
      this.$store.dispatch('getClassList')


      this.$nextTick(() => {
        new BScroll('.classifyList', {
          click:true,
          scrollY: true
        })
      })
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  $rem = (375/10)rem
  .classifyList
    width (81/$rem)
    height 100%
    font-size (12/$rem)
    overflow hidden
    border-right 1px gray solid
    top (44/$rem)
    ul
      width 100%
      padding (20/$rem 0 69/$rem 0)
      li
        height (30/$rem)
        font-size (14/$rem)
        display flex
        align-items center
        justify-content center
        &:not(:first-of-type)
          margin-top (20/$rem)
</style>
