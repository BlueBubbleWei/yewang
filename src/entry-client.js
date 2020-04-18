/**
 * entry-client.js 浏览器执行
 */
import {
    createApp
} from "./main.js"
const {
    app,
    router
} = createApp();
router.onReady(() => {
    app.$mount('#app')
});
