<template>
  <div class="cartInfo">
    <div class="cartHead">
      <span>购物车</span>
    </div>
    <div class="cartOptions">
      <ul>
        <li>30天无忧退货</li>
        <li>48小时快速退款</li>
        <li>满88元免邮费</li>
      </ul>
    </div>
    <div class="cartList">
      <div class="cartShow">
        <div class="cartImg"></div>
        <div class="login">
          <p>去添加点什么吧</p>
          <div>登录</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  $rem = (375/10)rem
  .cartInfo
    width 100%
    height 100%
    background #f4f4f4
    .cartHead
      width 100%
      height (44/$rem)
      padding (0 15/$rem)
      box-sizing border-box
      background white
      text-align center
      line-height (34/$rem)
      span
        display inline-block
        font-size (18/$rem)
    .cartOptions
      width 100%
      height (35/$rem)
      ul
        width 100%
        height 100%
        box-sizing border-box
        padding (0 15/$rem)
        display flex
        justify-content space-around
        align-items center
        li
          width (81/$rem)
          height (18/$rem)
          font-size (12/$rem)
          text-align center
          white-space nowrap
          line-height (18/$rem)
    .cartList
      width 100%
      height 100%
      .cartShow
        width 100%
        height 80%
        display flex
        flex-direction column
        justify-content center
        align-items center
        .cartImg
          width (124/$rem)
          height (124/$rem)
          background-image url("./images/noCart-a8fe3f12e5.png")
          background-size 100% 100%
        .login
          width 100%
          height (85/$rem)
          p
            height (14/$rem)
            width 100%
            margin-bottom (25/$rem)
            font-size (14/$rem)
            text-align center
          div
            margin (0 67/$rem)
            width (240/$rem)
            height (46/$rem)
            box-sizing border-box
            background #b4282d
            color white
            font-size (15/$rem)
            text-align center
            line-height (46/$rem)
</style>
