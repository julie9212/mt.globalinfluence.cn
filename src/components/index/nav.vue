<template>
    <div class="index_nav">
         <nav>
            <p v-for="(item,$index) in arr" @click="toggle($index)" :class="{active:$index==active}">{{item}}</p>
        </nav>
    </div>
</template>

<script>
export default {
    props:[
        "video",
    ],
    data(){
        return {
           active:0,
                arr:[
                    "首页",
                    "研究观点",
                    "报告厅",
                    "智库会议",
                    "军事1",
                    "军事2",
                    "军事3",
                    "军事4",
                ]
        }
    },
    mounted() {
        
    },
    methods: {
        toggle(index){
            this.active=index
        }
    },
}
</script>

<style lang="less" scope>
.index_nav{
    width: 100%;
    overflow:hidden;
}

// ===============================================

.index_nav nav{
    padding: 0 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: middle;
    -ms-flex-align: middle;
    align-items: middle;
    overflow: auto;
}
.index_nav p{
    text-align: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 10px;
    margin: 5px;

}
.index_nav p.active{
    color: #0CA4D6;
}
</style>
