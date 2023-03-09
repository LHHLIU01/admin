import Vue from 'vue'
import Vuex from 'vuex'

//使用插件
Vue.use(Vuex);

//引入模块小仓库
import home from './home';
import search from './search';
import detail from './detail/detail';
import shopcart from './shopcart';
import user from './user'
import trade from './trade';

export default new Vuex.Store({
    // state,   
    // mutations,
    // actions,
    // getters
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})

// // state : 仓库存储数据的地方
// const state = {
//     count:1
// };
// // mutations:修改state的唯一手段
// const mutations = {
//     ADD(state){
//         state.count++
//     }
// };
// // actions：处理actions，可以书写自己的业务逻辑，也可以处理异步
// const actions = {
//     add({commit}){
//         commit("ADD")  
//     }
// };
// // getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
// const getters = {};
