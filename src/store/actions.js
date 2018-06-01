import {
  RECEIVE_TOP_SCROLL,
  RECEIVE_CAROUSEL,
  RECEIVE_TRADEMARK,
  RECEIVE_NEW_PUBLISH,
  RECEIVE_FINE_GOODS,
  RECEIVE_TIME_LIMIT,
  RECEIVE_CHOICE,
  RECEIVE_SHOP_LIST,
  RECEIVE_CLASSFIY_LIST,
  RECEIVE_RECOMMEND_CAROUSEL,
  RECEIVE_RECOMMEND_SCROLL,
  RECEIVE_NUM,
  RECEIVE_RECOMMENDONE,
  RECEIVE_RECOMMENDTHREE,
  RECEIVE_RECOMMENDTWO,
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
  reqClassifyList,
  reqRecommendCarousel,
  reqRecommendScroll,
  reqRecommendOne,
  reqRecommendThree,
  reqRecommendTwo
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
  //分类列表
  async getClassList({commit}) {
    const result = await reqClassifyList()
    if (result.code===0) {
      const classList = result.data
      commit (RECEIVE_CLASSFIY_LIST,{classList})
    }
  },
  //识物轮播
  async getRecommed({commit}) {
    const result = await reqRecommendCarousel()
    if (result.code===0) {
      const recommends = result.data
      commit (RECEIVE_RECOMMEND_CAROUSEL,{recommends})
    }
  },
  //识物推荐
  async getScroll({commit}) {
    const result = await reqRecommendScroll()
    if (result.code===0) {
      const scrolls = result.data
      commit (RECEIVE_RECOMMEND_SCROLL,{scrolls})
    }
  },
  //获取Index
  getNum({commit},num) {
      commit (RECEIVE_NUM,num)
  },
  //为你推荐
  async getRecomOne({commit}) {
    const result = await reqRecommendOne()
    if (result.code===0) {
      const one = result.data
      commit (RECEIVE_RECOMMENDONE,{one})
    }
  },
  async getRecomTwo({commit}) {
    const result = await reqRecommendTwo()
    if (result.code===0) {
      const two = result.data
      commit (RECEIVE_RECOMMENDTWO,{two})
    }
  },
  async getRecomThree({commit}) {
    const result = await reqRecommendThree()
    if (result.code===0) {
      const three = result.data
      commit (RECEIVE_RECOMMENDTHREE,{three})
    }
  },
}
