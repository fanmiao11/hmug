<template>
  <view>
    shangpinxiangqing{{id}}
  </view>
</template>

<script>
  export default {
    data() {
      return {
        id: ''
      };
    },
    onLoad(option) {
      this.id = option.id
    }
  }
</script>

<style lang="scss">

</style>
