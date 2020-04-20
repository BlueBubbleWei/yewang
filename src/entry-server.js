/**
 * entry-server.js 服务端执行
 */
import util from "util";
import {
  createApp
} from './main'
export default context => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前，
  // 就已经准备就绪。
  return new Promise((resolve, reject) => {
    const {
      app,
      router,
      ssrServer
      // store
    } = createApp();
    // 设置服务器端 router 的位置
    router.push(context.url)
    // 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      const Components = router.getMatchedComponents();
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!Components.length) {
        // eslint-disable-next-line
        return reject({
          code: 404
        })
      }
      /**
       * 循环ROUTER中的组件
       */
      let POST_LIST = [];
      Components.map(item => {
        let serverKey = item.name;
        if (ssrServer[serverKey]) {
          let _POST_FUN = ssrServer[serverKey];
          for (let key in _POST_FUN) {
            if (key.indexOf("POST_") > -1) {
              /**
               * 增加队列用  利用context.param的数据，在链接中传参数
               */
              POST_LIST.push(_POST_FUN[key](context.param || {}))
            }
          }
        }
      });

      Promise.all(POST_LIST).then((res) => {
        /**
         * index.html 中的window._SSRModel 附值
         */
        context.SSRModel = JSON.stringify(ssrServer);
        resolve(app);
      }).catch(reject)
    }, reject)
  })
}
