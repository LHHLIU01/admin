import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";
//home模块小仓库
const state = {
    //home 仓库中存储三级菜单数据
    categoryList: [],
    // 轮播图数据
    bannerList: [],
    // floor组件数据
    floorList: [],
};
//mutations 唯一修改state的地方
const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    },
};
//actions 用户处理派发action
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        // console.log(result);
        if (result.code == 200) {
            commit("GETCATEGORYLIST", result.data)
        }
    },
    // 获取home 首页轮播图数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        console.log(result);
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }

    },
    // 获取floor数据
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}