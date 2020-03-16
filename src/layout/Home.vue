<template>
  <div class="layout">
    <div style="height:49px">
      <van-nav-bar 
        title="home" 
        left-text="返回" 
        left-arrow 
        fixed 
        style="z-index: 100;line-height:49px"
        >
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </div>
    
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">动态</van-tabbar-item>
      <van-tabbar-item name="video" icon="friends-o">视频</van-tabbar-item>
      <van-tabbar-item name="mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script> 
export default {
  data(){
    return{
      active: 'home'
    }
  },

  mounted() {

  },
  watch:{
      $route(){
          this.global();
      }
  },
  methods: {
    
  },
}
</script>

<style lang="less" scoped>

</style>