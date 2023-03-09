import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";
const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
};
const actions = {
    // 获取购物车数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        console.log(result);
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    },
    // 删除购物车一个商品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        // console.log(result);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 勾选购物车商品
    async updatedCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked);
        console.log(result);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 删除全部勾选商品
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : '';
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll)
    },
    // 修改全部复选框的状态
    updateAllCartIsChecked({ dispatch, state },isChecked) {
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updatedCheckedById', {skuId : item.skuId,isChecked});
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll)
    }
};
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}