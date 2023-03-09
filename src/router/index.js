//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter);

import routes from './routes'
//引入路由组件

//引入store
import store from '@/store'


let originPush = VueRouter.prototype.push

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

let router = new VueRouter({
    //配置路由
    routes,
    // 跳转路由回到页面顶端
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

// 路由守卫
router.beforeEach(async (to, from, next) => {

    let token = store.state.user.token;
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login') {
            next('/home')
        } else {
            if (name) {
                next();
            } else {
                try {
                    await store.dispatch('getUserInfo')
                    next();
                } catch (error) {
                    // token失效 获取不到用户信息
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    } else {
        // 未登录 无法跳转交易与支付相关的页面
        let toPath = to.path;
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            next('/login?redirect=' + toPath)
        } else {
            next();
        }
    }
})

export default router;
