import {
  RECEIVE_TOP_SCROLL,
  RECEIVE_CAROUSEL,
  RECEIVE_TRADEMARK,
  RECEIVE_NEW_PUBLISH,
  RECEIVE_FINE_GOODS,
  RECEIVE_TIME_LIMIT,
  RECEIVE_CHOICE,
  RECEIVE_SHOP_LIST,
} from './mutation-types'
import {
  reqTopScroll,
  reqCarousel,
  reqTrademark,
  reqNewPublish,
  reqFineGoods,
  reqTimeLimit,
  reqChoice,
  reqShopList,
} from "../api"
export default {
  //获取头部滚动条的信息
  async getTopScroll ({commit},callBack) {
    const result = await reqTopScroll()
    if (result.code===0) {
      const topScrolls = result.data
      commit (RECEIVE_TOP_SCROLL,{topScrolls})
    }
    callBack&&callBack()
  },
  //获取轮播图的信息
  async getCarousel ({commit}) {
    const result = await reqCarousel()
    if (result.code===0) {
      const carousels = result.data
      commit (RECEIVE_CAROUSEL,{carousels})
    }
  },
  //获取品牌直供的信息
  async getTrademark ({commit}) {
    const result = await reqTrademark()
    if (result.code===0) {
      const tagList = result.data
      commit (RECEIVE_TRADEMARK,{tagList})
    }
  },
  //新品首发信息
  async getNewPublish ({commit}) {
    const result = await reqNewPublish()
    if (result.code===0) {
      const newPublishs = result.data
      commit (RECEIVE_NEW_PUBLISH,{newPublishs})
    }
  },
  //好物推荐的信息
  async getFineGoods ({commit}) {
    const result = await reqFineGoods()
    if (result.code===0) {
      const goods = result.data
      commit (RECEIVE_FINE_GOODS,{goods})
    }
  },
  //限时购的信息
  async getTimes({commit}) {
    const result = await reqTimeLimit()
    if (result.code===0) {
      const timelimit = result.data
      commit (RECEIVE_TIME_LIMIT,{timelimit})
    }
  },
  //专题精选
  async getChoice({commit}) {
    const result = await reqChoice()
    if (result.code===0) {
      const choices = result.data
      commit (RECEIVE_CHOICE,{choices})
    }
  },
  //商品列表
  async getShopList({commit}) {
    const result = await reqShopList()
    if (result.code===0) {
      const shops = result.data
      commit (RECEIVE_SHOP_LIST,{shops})
    }
  },
}
