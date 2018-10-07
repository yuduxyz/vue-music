<template>
  <div>
    <div class="recommend-list">
      <div v-if="recommendList.length" class="recommend-wrapper">
        <slider>
          <div v-for="(item, index) in recommendList" :key="index">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
      <h1 class="list-title">热门歌单推荐</h1>
    </div>
  </div>
</template>

<script>
import { fetchRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'
import Slider from 'base/slider/slider'

export default {
  data () {
    return {
      recommendList: []
    }
  },
  created () {
    this._fetchRecommend()
  },
  methods: {
    _fetchRecommend () {
      fetchRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recomendList = res.data.slider
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .recommend-list
    .list-title
      height: 65px
      line-height: 65px
      text-align: center
      font-size: $font-size-medium
      color: $color-theme
</style>
