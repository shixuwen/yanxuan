/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
//头部滚动条
export const reqTopScroll = () => ajax('/headCateList')
//轮播图
export const reqCarousel = () => ajax('/carousel')
//品牌直供
export const reqTrademark = () => ajax('/tagList')
//新品首发
export const reqNewPublish = () => ajax('/newPublish')
//人气推荐
export const reqFineGoods = () => ajax('/fineGoods')
//限时购
export const reqTimeLimit = () => ajax('/timelimit')
//专题精选
export const reqChoice = () => ajax('/choice')
//商品列表
export const reqShopList = () => ajax('/shopList')
