<template>

    <swiper :options="swiperOption"  class="icon-wraper">
        <swiper-slide v-for="(page,index) in pages" :key="index">
            <div class="icon-item" v-for="item in page" :key="item.id">
                <div class="icom-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <p>{{item.desc}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        name: "homeicon",
        props:{
            iconLists:Array
        },
        data(){
            return{
                swiperOption: {
                    autoplay:true,
                    loop:true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                }
            }
        },
        computed:{
            pages(){
                const pages = [];
                this.iconLists.forEach((item,index) => {
                    let page = Math.floor(index/8);
                    if(!pages[page]){
                        pages[page] = []
                    }
                    pages[page].push(item)
                });
                return pages
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .icon-wraper{
        overflow:hidden;
        width:100%;
        height:0;
        padding-bottom:50%;
        .icon-item{
            float:left;
            box-sizing:border-box;
            width:25%;
            margin-top:10px;
            .icom-img{
                box-sizing:border-box
                padding:0 15px;
                width:100%;
                img{
                    width:100%;
                }
            }
            p{
                text-align: center;
                font-size: 12px;
                line-height: 20px;
                overflow:hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
            }
        }
    }
</style>