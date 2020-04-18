// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/**
 * 路由
 */
import {
    createRouter
} from './router'
import {
    createStore
} from "./store"

/**
 * 服务端请求接口数据
 */
import SSRServer from "./SSRModel";
Vue.use(SSRServer);
Vue.config.productionTip = false

/* eslint-disable no-new */

export function createApp() {
    let router = new createRouter();
    let store = new createStore();
    let app = new Vue({
        router,
        store,
        render: h => h(App)
    });
    return {
        app,
        router,
        store,
        SSRServer
    }
}
