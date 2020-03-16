<template>
    <div class="index_banner">
        <div style="height:230px;background:#eee">
            <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white" style="height:100%">
                <van-swipe-item v-for="info in banner">
                    <img :src="info.img_url" alt="">
                    <div class="title">
                        <p>{{info.title}}</p>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
            
    </div>
</template>

<script>
export default {
    props:[
        "banner",
    ],
    data(){
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
       
    },

}
</script>

<style lang="less" scope>
.index_banner{
    position:relative;
}
.index_banner img{
    width:100%;
    height:100%
}
.van-swipe__indicators {
    position: absolute;
    bottom: 10px;
    left:80%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-transform: none;
    transform: none;
}

.index_banner .title{
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6), rgba(0,0,0,1));
    width:100%;
    overflow: hidden;
    position: absolute;
    left:0px;
    bottom:0px;
    z-index: 1;
}
.index_banner .title p{
    padding:0 15px;
    color:#eee;
    text-align: left;
    font:.875em/2em '微软雅黑';
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
}
</style>
