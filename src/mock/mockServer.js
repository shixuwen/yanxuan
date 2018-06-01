/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import homeData from './home_data'
import classData from './classify_data'
import recommendCar from './shiwu_data'
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
//分类列表
Mock.mock('/classifyList', {code:0, data: classData.categoryL1List})
//识物轮播
Mock.mock('/recommendCarousel', {code:0, data: recommendCar.banner})
//识物推荐
Mock.mock('/recommendScroll', {code:0, data: recommendCar.column})
//为你推荐
Mock.mock('/recommendOne', {code:0, data: recommendCar.recommendOne})
Mock.mock('/recommendTwo', {code:0, data: recommendCar.recommendTwo})
Mock.mock('/recommendThree', {code:0, data: recommendCar.recommendThree})




