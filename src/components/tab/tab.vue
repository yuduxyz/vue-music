<template>
  <div class="tab">
    <router-link class="tab-item" tag="div" to="/recommend">
      <a class="tab-link">推荐</a>
    </router-link>
    <router-link class="tab-item" tag="div" to="/rank">
      <a class="tab-link">排行</a>
    </router-link>
    <router-link class="tab-item" tag="div" to="/search">
      <a class="tab-link">搜索</a>
    </router-link>
    <router-link class="tab-item" tag="div" to="/singer">
      <a class="tab-link">歌手</a>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'

  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      &.router-link-active .tab-link
        color: $color-theme
        border-bottom: 1px solid $color-theme
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
</style>
