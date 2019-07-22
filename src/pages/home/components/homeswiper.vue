<template>
    <swiper :options="swiperOption" class="swiper-wrapper">
        <!-- slides -->
        <swiper-slide v-for="item of swiperLists" :key="item.id">
            <img :src="item.imgUrl" alt="图片未显示">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        name: "homeswiper",
        props:{
            swiperLists:Array
        },
        data(){
            return{
                swiperOption: {
                    loop:true,
                    autoplay:true,
                    pagination: {
                        el: '.swiper-pagination',
                    }
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .swiper-wrapper >>> .swiper-pagination-bullet-active{
        background:#fff
    }
    .swiper-wrapper{
        width: 100%;
        height:0;
        padding-bottom:31.25%
        img{
            width:100%;
            height:auto
        }

    }
</style>