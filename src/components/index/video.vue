<template>
    <div class="index_video">
        <van-row gutter="20">
            <van-col span="6">
                <van-button type="info"  size="small"><p>智库视频</p></van-button>
            </van-col>
        </van-row>
        <br>
        <div class="video_main">
            <van-swipe :loop="false" :width="280"  @change="onChange">
                <van-swipe-item v-for="info in video">
                    <div class="video_main" style="margin-right:15px"  @click="modal(info.id)">
                        <img :src="info.img_url" alt="">
                        <div class="video_bg"></div>
                        <div class="video_icon">
                            <van-icon name="play-circle-o" />
                        </div>
                        <div class="video_title">
                            <p>{{info.title}}</p>
                        </div>
                    </div>
                </van-swipe-item>
                <div class="video_pige" slot="indicator">
                    <p>{{ current + 1 }}/5</p> 
                </div>
            </van-swipe>
        </div>

        <!-- 模态框开始 -->
        <van-overlay :show="show" @click="show = false">
            <br><br><br>
            <div style="width:100%;" class="video_play">
                <iframe  :src="video_url" marginheight="0" marginwidth="0" frameborder="0" width="100%" height="100%" scrolling="yes" allowfullscreen="true" allowtransparency="true" ></iframe>
            </div>
        </van-overlay>
        <!-- 模态框结束 -->
    </div>
</template>

<script>
export default {
    props:[
        "video",
    ],
    data(){
        return {
            current: 0,
            show: false,
            video_url:'',
            screenWidth: document.body.clientWidth,     // 屏幕宽
            screeHeight: document.body.clientHeight,    // 屏幕高
        }
    },
    mounted() {
        
    },
    methods: {
        onChange(index) {
            this.current = index;
        },
        modal(video_id){
            this.show = true;
            // console.log(video_id);
            this.videoInfo(video_id);
        },
        // 获取视频连接
        async videoInfo(video_id){
            let res = await this.$api.indexVideo({id:video_id});
            if (res) {
                this.video_url = res.info.video_url;
                console.log(res.info.video_url);
            }
        },

    },
}
</script>

<style lang="less" scope>
.index_video {
    padding:15px 15px 0;
}
.index_video .van-button--small {
    padding:2px 0;
    min-width: 100%;
    height: 100%;
    font: .875em/1.75em '微软雅黑';
}
.index_video .van-button--info {
    color: #0CA4D6;
    background-color: #E9F5FC;
    border: 0px solid #1989fa;
}
.index_video p {
    margin:0;
    font:.875em/1.75em '微软雅黑';
}

.index_video .video_main{
    height:150px;
    position:relative;
}
.index_video .video_main .video_pige{
    position:absolute;
    right:5px;
    bottom:5px;
    background:rgba(0, 0, 0, 0.6);
    padding:0 5px;
    color:#eee;
    font: .75em/1.75em '微软雅黑';
}

.index_video img{
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.6);
}
.index_video .video_bg{
    position: absolute;
    bottom:0;
    width:100%;
    height:100%;
    background:rgba(0, 0, 0, 0.1);
}
.index_video .video_title{
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6), rgba(0,0,0,1));
    width:100%;
    overflow: hidden;
    position: absolute;
    left:0px;
    bottom:0px;
}
.index_video .video_title p{
    padding-left:5px;
    color:#eee;
    text-align: left;
    font:.875em/2em '微软雅黑';
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
}
.index_video .video_icon{
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    font-size:2.5em;
    color:#eee;
}

// 模态框
.index_video .video_play{
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
}
</style>
