<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :swiperLists="swiperLists"></HomeSwiper>
        <p>11111111</p>
    </div>
</template>

<script>
    import HomeHeader from './components/homeheader'
    import HomeSwiper from './components/homeswiper'
    export default {
        name: "home",
        data(){
            return{
                swiperLists:[]
            }
        },
        components:{
            HomeHeader,
            HomeSwiper
        },
        created() {
            //请求数据
            this.$axios.get('../../../static/mock/index.json')
                .then(res => {
                    this.swiperLists = res.data.data.swiperList;
                })
                .catch(error => {
                   console.log(error);
                })
        }
    }
</script>

<style scoped>

</style>