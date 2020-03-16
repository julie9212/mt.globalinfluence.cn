<template>
    <div class="index_report">
        <van-row gutter="20">
            <van-col span="6">
                <van-button type="info" size="small"><p>智库报告</p></van-button>
            </van-col>
        </van-row>
        <van-row gutter="20" style="padding-top:15px">
            <van-col span="12" v-for="info in platform">
                <a :href="info.url"  target="_blank">
                    <img :src="info.img_url" alt="" style="width:100%;padding-bottom:15px" >
                </a>
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    props:[
        "platform",
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
.index_report {
    padding:15px 15px 0;
    // text-align: left;
}
.index_report .van-button--small {
    padding:2px 0;
    min-width: 100%;
    height: 100%;
    font: .875em/1.75em '微软雅黑';
}
.index_report .van-button--info {
    color: #0CA4D6;
    background-color: #E9F5FC;
    border: 0px solid #1989fa;
}
.index_report p {
    margin:0;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
    font:.875em/1.75em '微软雅黑';
}
</style>
