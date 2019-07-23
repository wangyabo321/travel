<template>
    <div class="recommend-wraper">
        <p class="ptext">周末推荐</p>
        <div class="item-recommend" v-for="item in weekendLists" :key="item.id">
            <div class="item-img">
                <img :src="item.imgUrl" alt="图片未显示">
            </div>
            <div class="item-text">
                <p>{{item.desc}}</p>
                <h3>{{item.title}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeweekend",
        props:{
            weekendLists:Array,
        }
    }
</script>

<style lang="stylus" scoped>
    .recommend-wraper{
        width:100%;
        height:0;
        padding-bottom:1.2rem;
        margin-top:.1rem;
        .ptext{
            line-height:.3rem;
            background: #eee;
            text-indent: .1rem;
            font-size:.16rem;
        }
        .item-recommend{
            padding:.1rem;
            padding-top:0;
            box-sizing:border-box;
            .item-img{
                width:100%;
                img{
                    width:100%;
                }
            }
            .item-text{
                font-size:.13rem;
                min-width:0;
                p{
                    margin-top:.05rem;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
                h3{
                    margin-top:.08rem;
                    color:#999;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
            }

        }
    }

</style>