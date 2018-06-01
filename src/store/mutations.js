import Vue from 'vue'
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
  RECEIVE_RECOMMENDTWO,
  RECEIVE_RECOMMENDTHREE,
  RECEIVE_RECOMMENDONE,

} from "./mutation-types";

export default {
  [RECEIVE_TOP_SCROLL] (state,{topScrolls}) {
    state.topScrolls = topScrolls
  },
  [RECEIVE_CAROUSEL] (state,{carousels}) {
    state.carousels = carousels
  },
  [RECEIVE_TRADEMARK] (state,{tagList}) {
    state.tagList = tagList
  },
  [RECEIVE_NEW_PUBLISH] (state,{newPublishs}) {
    state.newPublishs = newPublishs
  },
  [RECEIVE_FINE_GOODS] (state,{goods}) {
    state.goods = goods
  },
  [RECEIVE_TIME_LIMIT] (state,{timelimit}) {
    state.timelimit = timelimit
  },
  [RECEIVE_CHOICE] (state,{choices}) {
    state.choices = choices
  },
  [RECEIVE_SHOP_LIST] (state,{shops}) {
    state.shops = shops
  },
  [RECEIVE_CLASSFIY_LIST] (state,{classList}) {
    state.classList = classList
  },
  [RECEIVE_RECOMMEND_CAROUSEL] (state,{recommends}) {
    state.recommends = recommends
  },
  [RECEIVE_RECOMMEND_SCROLL] (state,{scrolls}) {
    state.scrolls = scrolls
  },
  [RECEIVE_NUM] (state,num) {
    state.num = num
  },
  [RECEIVE_RECOMMENDONE] (state,one) {
    state.one = one
  },
  [RECEIVE_RECOMMENDTWO] (state,two) {
    state.two = two
  },
  [RECEIVE_RECOMMENDTHREE] (state,three) {
    state.three = three
  },

}
