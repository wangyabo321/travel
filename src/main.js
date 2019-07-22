// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入Axios
import Axios from 'axios'
//Swiper插件的使用
import VueAwespmeSwiper from 'vue-awesome-swiper'
import "./assets/style/reset.css"
import "./assets/style/border.css"
import "./assets/font/iconfont.css"
//引入swiper样式
import '../node_modules/swiper/dist/css/swiper.css'
Vue.use(VueAwespmeSwiper);

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
