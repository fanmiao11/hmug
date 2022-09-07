<template>

  <view>
    <van-card :thumb-link="`/subpkg/goods_detail/goods_detail?id=${item.goods_id}`"
      :thumb="item.goods_small_logo || defaultPic" v-for="item in goods" :key="item.goods_id"
      :price="item.goods_price | toFixed" :title="item.goods_name" />
  </view>

</template>

<script>
  import {
    getGoodsListApi
  } from '@/api/goods.js'
  import toast from '@/utils/toast.js'
  export default {
    data() {
      return {
        queryData: {
          query: '',
          cid: '',
          pagenum: 1,
          pasesize: 10
        },
        goods: [],
        total: 0,
        // 默认的空图片
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
        loading: false
      };
    },
    methods: {
      async getGoodsList(cb) {
        this.loading = true
        const {
          message
        } = await getGoodsListApi(this.queryData)
        console.log(message);
        this.goods = [...this.goods, ...message.goods]
        this.total = message.total
        cb && cb()
        this.loading = false
      }
    },
    onLoad({
      query
    }) {
      this.queryData.query = query
      this.getGoodsList()
    },
    onPullDownRefresh() {
      this.queryData = {
        query: this.queryData.query,
        cid: '',
        pagenum: this.queryData.pagenum++,
        pasesize: 10
      }
      this.goods = []
      this.total = 0
      this.getGoodsList(() => {
        uni.stopPullDownRefresh()
      })
    },
    onReachBottom() {
      if (this.queryData.pagenum * this.queryData.pasesize > this.total) return toast('数据加载完')
      if (this.loading) return
      this.queryData.pagenum++
      this.getGoodsList()
    }
  }
</script>

<style lang="scss">

</style>
