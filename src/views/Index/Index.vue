<template>
  <div class="index">
    <Nav></Nav>
    <Banner :banner="banner"></Banner>
    <News :news="news"></News>
    <Meeting :meeting="meeting"></Meeting>
    <Report :report="report"></Report>
    <div style="padding-top:15px">
       <img src="../../../public/img/ad.png" width="100%">
    </div>
    <Video :video="video"></Video>
    <Platform :platform="platform"></Platform>
    <Viewpoint :viewpoint="viewpoint"></Viewpoint>
    <!-- <Test></test> -->
  </div>
</template>

<script>
import Nav from '../../components/index/nav'
import Banner from '../../components/index/banner'
import News from '../../components/index/news'
import Meeting from '../../components/index/meeting'
import Report from '../../components/index/report'
import Video from '../../components/index/video'
import Platform from '../../components/index/platform'
import Viewpoint from '../../components/index/viewpoint'
import Test from '../../components/index/test'

export default {
  components:{
      Nav,
      Banner,
      News,
      Meeting,
      Report,
      Video,
      Platform,
      Viewpoint,
      Test,
  },
  data(){
    return{
        banner:'',
        news:'',
        meeting:'',
        report:'',
        video:'',
        platform:'',
        viewpoint:'',
    }
  },
  mounted() {
      this.indexList();
      // console.log(this.news+'ok');
  },
  methods: {
    async indexList(){
      let res = await this.$api.indexList();
      if (res) {
        this.banner = res.banner;
        this.news = res.news;
        this.meeting = res.meeting;
        this.report = res.report;
        this.video = res.video;
        this.platform = res.platform;
        this.viewpoint = res.viewpoint;
          console.log(res);
      }
    },


  },
}
</script>

<style lang="less" scoped>
.aa{
  background:#00f
}
</style>