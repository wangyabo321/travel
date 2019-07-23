<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :swiperLists="swiperLists"></HomeSwiper>
        <HomeIcon :iconLists="iconLists"></HomeIcon>

    </div>
</template>

<script>
    import HomeHeader from './components/homeheader'
    import HomeSwiper from './components/homeswiper'
    import HomeIcon from './components/homeicon'
    export default {
        name: "home",
        data(){
            return{
                swiperLists:[],
                iconLists:[]
            }
        },
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcon
        },
        created() {
            //请求数据
            this.$axios.get('../../../static/mock/index.json')
                .then(res => {
                    this.swiperLists = res.data.data.swiperList;
                    this.iconLists = res.data.data.iconList;
                })
                .catch(error => {
                   console.log(error);
                })
        }
    }
</script>

<style scoped>

</style>