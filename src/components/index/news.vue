<template>
    <div class="index_news">
        <van-notice-bar     
            color="#1989fa"
            background="#ecf9ff"
            left-icon="volume-o"
            mode="link"
        >
            <p>{{news.title}}</p>
        </van-notice-bar>
    </div>
</template>

<script>
export default {
    props:[
        "news",
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
.index_news p {
    margin:0;
    font:.875em/2em '微软雅黑';
}
</style>
