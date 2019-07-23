<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :swiperLists="swiperLists"></HomeSwiper>
        <HomeIcon :iconLists="iconLists"></HomeIcon>
        <HomeRecommend :recommendLists="recommendLists"></HomeRecommend>
        <HomeWeekend :weekendLists="weekendLists"></HomeWeekend>
    </div>
</template>

<script>
    import HomeHeader from './components/homeheader'
    import HomeSwiper from './components/homeswiper'
    import HomeIcon from './components/homeicon'
    import HomeRecommend from './components/homerecommend'
    import HomeWeekend from './components/homeweekend'
    export default {
        name: "home",
        data(){
            return{
                swiperLists:[],
                iconLists:[],
                recommendLists:[],
                weekendLists:[]
            }
        },
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcon,
            HomeRecommend,
            HomeWeekend
        },
        created() {
            //请求数据
            this.$axios.get('../../../static/mock/index.json')
                .then(res => {
                    this.swiperLists = res.data.data.swiperList;
                    this.iconLists = res.data.data.iconList;
                    this.recommendLists = res.data.data.recommendList;
                    this.weekendLists = res.data.data.weekendList;
                })
                .catch(error => {
                   console.log(error);
                })
        }
    }
</script>

<style scoped>

</style>