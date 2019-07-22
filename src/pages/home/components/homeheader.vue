<template>
    <div class="header-wrapper">
        <div class="header-left"><i class="iconfont icon-jiantou1"></i></div>
        <div class="header-input">
            <input type="text" placeholder="请输入搜索内容" v-focus>
        </div>
        <div class="header-right">北京&nbsp;<i class="iconfont icon-jiantou"></i></div>
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
        height:.9rem;
        line-height:.9rem;
        display:flex;
        background:#00bcd4;
        text-align:center;
        color:#fff;
        .header-left{
           float:left;
           width:.8rem; //40px*0.02=0.80rem
        }
        .header-input{
            flex:1;
            width:100%;
            margin:0 .1rem 0 .1rem//5px*0.02=20
            input{
                height:.64rem;
                line-height:.64rem;
                width:100%;
                text-indent:0.2rem;
                border-radius:0.1rem;

            }
        }
        .header-right{
            float:right;
            width:1.2rem; //60px*0.02=120
            .icon-jiantou{
                font-size:.24rem;
            }
        }
    }
</style>