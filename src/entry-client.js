/**
 * entry-client.js 浏览器执行
 */
import { createApp } from "./main.js"

const { app, router } = createApp();
if (window.__INITIAL_STATE__) {
	store.replaceState(window.__INITIAL_STATE__)
}
router.onReady(() => {
	app.$mount('#app')
});
