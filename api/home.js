import fly from './@/utils/request.js'

// 获取轮播图数据
export const getBannersApi = () => {
  return fly.get('/home/swiperdata')
}
/**
 * 获取分类数据
 * */
export const getNavListApi = () => {
  return fly.get('/home/catitems')
}
// 获取楼层数据
export const getFloorListApi = () => {
  return fly.get('home/floordata')
}
