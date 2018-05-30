/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import homeData from './home_data'
// 返回topScroll的接口
 Mock.mock('/headCateList', {code:0, data: homeData.headCateList})
// 返回轮播图的接口
 Mock.mock('/carousel', {code:0, data: homeData.focusList})
//品牌直供的借口
 Mock.mock('/tagList', {code:0, data: homeData.tagList})
//新品首发的借口
Mock.mock('/newPublish', {code:0, data: homeData.newItemList})
//好物推荐的接口
Mock.mock('/fineGoods', {code:0, data: homeData.popularItemList})
//限时购
Mock.mock('/timelimit', {code:0, data: homeData.flashSaleIndexVO})
//专题精选
Mock.mock('/choice', {code:0, data: homeData.topicList})
//商品列表
Mock.mock('/shopList', {code:0, data: homeData.cateList})
