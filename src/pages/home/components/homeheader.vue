<template>
    <div class="header-wrapper">
        <div class="header-left"><i class="iconfont icon-jiantou1"></i></div>
        <div class="header-input">
            <input type="text" placeholder="请输入搜索内容" v-focus>
        </div>
        <router-link to="/city">
            <div class="header-right">北京&nbsp<i class="iconfont icon-jiantou"></i></div>
        </router-link>


    </div>
</template>

<script>
    export default {
        name: "homeheader",
        directives:{
            'focus': {
                inserted(el){
                    el.focus();
                }
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .header-wrapper{
        height:.45rem;
        line-height:.45rem;
        display:flex;
        background:#00bcd4;
        text-align:center;
        color:#fff;
        .header-left{
           float:left;
           width:.4rem;
        }
        .header-input{
            flex:1;
            width:100%;
            margin:0 .05rem 0 .05rem
            input{
                height:.32rem;
                line-height:.32rem;
                width:100%;
                text-indent:.1rem;
                border-radius:.05rem;
                font-size:.14rem;

            }
        }
        .header-right{
            float:right;
            font-size:.16rem;
            min-width:.6rem;
            padding-right:.05rem;
            color:#fff;
            .icon-jiantou{
                font-size:.12rem;
            }
        }
    }
</style>