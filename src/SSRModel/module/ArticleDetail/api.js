import axios from "axios";
/**
 * 由服务端根据 query 值，进行传参；
 * @param {Object} param 
 */
export function POST_ArticleDetail(param) {
  this.model.param = param;
  return axios.get("/weirong").then(res => {
    if (res.data.data)
      this.model.detailData = res.data.data;
  })
  return new Promise((reslove, reject) => {
    /**
     * 参数，在渲染时，根据URL,GET进行传送
     */
    setTimeout(() => {
      this.model.list = [{
          value: 0,
          label: "更新list1"
        },
        {
          value: 2,
          label: "更新list2"
        },
        {
          value: 3,
          label: "更新list3"
        }
      ]
      reslove();
      if (!this.model.list) {
        reject();
      }
      /**
       * 失败
       */

    }, 1000)
  })
}
