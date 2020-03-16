<template>
  <div class="index_viewpoint">
    <!-- {{viewpoint}} -->
    <!-- {{list}} -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="info in list" class="view_mina">
          <van-row gutter="20">
            <van-col span="14">
              <p class="view_title">{{info.title}}</p>
              <!-- <div class="view_info">
                <van-row>
                  <van-col span="4"> 
                    <p style="text-align:left">{{info.writer}}</p>
                  </van-col>
                  <van-col span="20"> 
                    <p style="text-align:right">{{info.create_time}}</p>
                  </van-col>
                </van-row>
              </div> -->
            </van-col>
            <van-col span="10">
              <img :src="info.img_url" alt="">
            </van-col>
          </van-row>
          <van-col span="14" style="margin-top:-30px">
              <div class="view_info">
                <van-row>
                  <van-col span="9"> 
                    <p style="text-align:left">{{info.writer}}</p>
                  </van-col>
                  <van-col span="15"> 
                    <p style="text-align:right">{{info.create_time}}</p>
                  </van-col>
                </van-row>
              </div>
            </van-col>
          <!-- {{info.title}} <br><br> -->
        </div>
      </van-list>
    </van-pull-refresh>

      <br><br><br>
  </div>

</template>

<script>
export default {
  props:[
    "viewpoint",
  ],
  computed: {
    normalizedSize: function () {
      return this.ctype.trim().toLowerCase()
    }
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },

  mounted () {
    
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {         
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 5; i++) {
          this.list.push(this.viewpoint[this.list.length+1]);
          // console.log(this.list.push(this.viewpoint[this.list.length+1]))
        }
        
        this.loading = false;

        if (this.list.length >= this.viewpoint.length-4) {
          this.finished = true;
        }
      }, 1500);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    }
  }
};
</script>

<style lang="less">
.index_viewpoint {
    padding:15px 15px 0;
    // text-align: left;
}
.index_viewpoint .view_mina{
  padding:10px 0;
  border-top:1px solid #ccc;
  // position:relative;
}
.index_viewpoint .view_mina .view_title{
  margin:0;
  display: -webkit-box;
  -webkit-line-clamp:2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  font: .875em/1.5em '微软雅黑';
  text-align: left;
}
.index_viewpoint .view_mina img{
  width:100%;
}
.index_viewpoint .view_mina .view_info{
  font: .75em/1em '微软雅黑';
  color:#999
}
</style>
