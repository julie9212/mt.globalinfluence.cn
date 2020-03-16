<template>
    <div class="index_meeting">
        <van-row gutter="20">
            <van-col span="6">
                <van-button type="info"  size="small"><p>智库会议</p></van-button>
            </van-col>
            <van-col span="18">
                <p style="text-align: left;"><span href="" style="color:#0CA4D6">{{meeting.source}} | {{meeting.writer}}</span> {{meeting.title}}</p>
            </van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    props:[
        "meeting",
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
.index_meeting {
    padding:15px 15px 0;
    // text-align: left;
}
.index_meeting .van-button--small {
    padding:2px 0;
    min-width: 100%;
    height: 100%;
    font: .875em/1.75em '微软雅黑';
}
.index_meeting .van-button--info {
    color: #0CA4D6;
    background-color: #E9F5FC;
    border: 0px solid #1989fa;
}
.index_meeting p {
    margin:0;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分文字以...显示*/
    font:.875em/1.75em '微软雅黑';
}
</style>
