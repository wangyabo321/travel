<template>
    <div class="recommend-wraper">
        <p class="ptext">热门推荐</p>
        <div class="item-recommend" v-for="item in recommendLists" :key="item.id">
            <div class="item-img">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="item-text">
                <p>{{item.desc}}</p>
                <h3>{{item.title}}</h3>
                <button>查看详情</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homerecommend",
        props:{
            recommendLists:Array,
        }
    }
</script>

<style lang="stylus" scoped>
    .recommend-wraper{
        overflow:hidden;
        width:100%;
        margin-top:.1rem;
        .ptext{
            line-height: .3rem;
            background: #eee;
            text-indent: .1rem;
            font-size:.16rem;
        }
        .item-recommend{
            display:flex;
            padding:.1rem 0 0 .1rem;
            box-sizing:border-box;
            height:0;
            padding-bottom:.85rem;
            .item-img{
                width:.85rem;
                img{
                    width:100%;
                }
            }
            .item-text{
                flex:1;
                margin-left:.1rem;
                font-size:.13rem;
                min-width:0;
                p{
                    margin-top:.05rem;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
                h3{
                    margin:.15rem 0;
                    color:#999;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
                button{
                    padding:0 .05rem;
                    color:#fff;
                    background:greenyellow;
                }
            }

        }
    }

</style>