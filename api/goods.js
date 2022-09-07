import fly from '@/utils/request.js'

export const getGoodsListApi = (data) => fly.get('/goods/search', data)
