import HousingDetails from "./module/HousingDetails";
import HousingList from "./module/HousingList";
import Vue from "vue";
class SSRServer {
  constructor() {
    /**
     * 规则必须为：{组件名称} + "Api"
     */
    /**
     * 房源列表
     */
    this.HousingList = HousingList;
    /**
     * 房源详情
     */
    this.HousingDetails = HousingDetails;
  }
}


let ssrServer = new SSRServer();


if (typeof window !== 'undefined' && window.__SSRModel) {
  /**
   *【加载之后】 从服务器同步数据
   */
 let SSRModel = JSON.parse(window.__SSRModel.replace(/&quot;/g,"\""))
 /**
  * 房源列表数据
  */
 ssrServer.HousingList.data = SSRModel.HousingList.data

 /**
  * 房源详情数据
  */
 ssrServer.HousingDetails.data = SSRModel.HousingDetails.data
}

/**
 * 全局事件
 */
Vue.prototype.$SSRModel = ssrServer;

/**
 * 抛出事件
 */
export default ssrServer;