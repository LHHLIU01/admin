import Vue from 'vue'
import App from './App.vue'


//全局组件：------------------------
//三级联动组件----全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
//第一个参数：全局组件的名字，第二个参数：那个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

// ----------------------------------
// 引入导出的路由
import router from '@/router'
// 引入仓库
import store from '@/store'
//测试
// import {reqCategoryList} from '@/api'
// reqCategoryList();

Vue.config.productionTip = false
//引入mock
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'
// 统一引入api
import * as API from '@/api'
// element-ui--------------------------------
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// element-ui--------------------------------
// 懒加载-------------------------------------
import VueLazyload from 'vue-lazyload'
import gif from '@/assets/jz.gif';
Vue.use(VueLazyload, { loading: gif })
// 懒加载-------------------------------------
// 表单校验-------------------------------------
import '@/plugins/validate'
// 表单校验-------------------------------------
new Vue({
  render: h => h(App),
  router,//注册
  store,//注册
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;

  }
}).$mount('#app')
