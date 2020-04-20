<template>
  <div class="right">
  <!--搜索框-->
    <search></search>
    <!--24小时热闻-->
    <div class="right-box hot-new">
      <div class="right-title">24小时热闻</div>
      <div class="hot-list">
        <li class="img-list">
          <div class="fl">
            <a href="http://yewang.yztest.top/p/168.html" 
            style="background: url(http://cdn.cctv69.top/test/materialResource/155055983172668.blob) no-repeat;background-position: top center;background-size: cover;"
            class="image"></a>
          </div>
          <div class="fl rinfo">
            <a href="http://yewang.yztest.top/p/168.html" class="title">11</a>
          </div>
        </li>
        <li class="img-list">
          <div class="fl">
            <a href="http://yewang.yztest.top/b/1000139_1.html" style="background: url(http://cdn.cctv69.top/test/materialResource/f161062f1d464baa8a660425a79af0cc.jpg) no-repeat;background-position: top center;background-size: cover;" class="image"></a>
          </div>
          <div class="fl rinfo">
            <a href="http://yewang.yztest.top/b/1000139_1.html" class="title">直播固定操作222</a>
          </div>
        </li>
        <li class="img-list">
          <div class="fl">
            <a href="http://yewang.yztest.top/b/1000138_1.html" style="background: url(http://cdn.cctv69.top/test/materialResource/ad5ee69f28d94d7cb2d1e12bf4088a2f.jpg) no-repeat;background-position: top center;background-size: cover;" class="image"></a>
          </div>
          <div class="fl rinfo">
            <a href="http://yewang.yztest.top/b/1000138_1.html" class="title">直播固定操作111</a>
          </div>
        </li>
      </div>
    </div>
    <!--爆料-->
    <div class="right-box ad-box">
      <!--<div class="right-box ad-box2">
          <a href='#'><img src='../static/images/mmexport1577247810137.png' style='max-width: 100%;height: auto;'></a>
      </div>-->
      <div class="right-box ad-box2">
          <a href="https://py.hndnews.com/" target="_blank"><img src="./../assets/20180728215711W3yEet.png" style="max-width: 100%;height: auto;"></a>
      </div>
      <div class="right-box ad-box2">
          <a href="../static/tipoff/revelations.html" target="_blank"><img src="./../assets/20180610203255vR1IQO.png" style="max-width: 100%;height: auto;"></a>
      </div>
      <div class="right-box ad-box1">
      </div>
    </div>
    <!--广告位1 -->
    <div class="right-box ad-box1"></div>
    <!--友情链接-->
    <div class="right-box link-index">
      <div class="right-title">友情链接</div>
      <div class="link-list link-list-box">
        <!--<a href="http://www.ashainan.com/" target="_blank">嘟咪棋牌 </a>-->
        <a href="http://www.xunns.com/" target="_blank">中国讯网 </a>
        <a href="http://hainan.rmfz.org.cn/" target="_blank">法治海南 </a>
        <a href="http://hn.fang.com/" target="_blank">海南房产网 </a>
      </div>
    </div>
    <div class="right-box ad-box2">
      <a href="sdfdsfdsf" target="_blank"><img src="http://cdn.cctv69.top/test/materialResource/d0c7ca7307ad4c50bf69f62684da6c7f.jpg" style="max-width: 100%;height: auto;"></a>
    </div>
    <!--广告位2 -->
    <div class="right-box ad-box1"></div>
    <div class="right-box link-index">
        <div class="right-title">媒体网站</div>
        <div class="link-list link-list-box">
          <a href="http://www.hi.chinanews.com/" target="_blank">中新网海南 </a>
          <a href="http://www.hq.xinhuanet.com/" target="_blank">新华网海南频道 </a>
          <a href="http://hi.people.com.cn/" target="_blank">人民网海南频道 </a>
        </div>
    </div>
    <!--广告位3 -->
    <div class="right-box ad-box1">
      <a href="sdfdsfsdf" target="_blank"><img src="http://cdn.cctv69.top/test/materialResource/21769677028245b8b4ab4bf7e502f943.jpg"
      style="max-width: 100%;height: auto;"></a>
    </div>
  </div>
</template>
<script>
import search from './search'
export default {
  components:{
    search
  },
  data(){
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  @import './common.scss';
  .right{
    width: 275px;
    .right-box {
      width: 275px;
      background: #f8fdff;
      box-shadow: 0 0 2px #f6fafb;
      margin: 20px 0;
      .right-title {
        height: 56px;
        line-height: 20px;
        padding-top: 18px;
        padding-left: 30px;
        color: #328cff;
        position: relative;
        font-size: 18px;
      }
      .hot-list {
        padding-bottom: 1px;        
      }
      .right-title:before {
        content: "";
        display: block;
        background: #328cff;
        width: 4px;
        height: 20px;
        position: absolute;
        left: 17px;
        top: 18px;
      }
    }
    .right-title {
      height: 56px;
      line-height: 20px;
      padding-top: 18px;
      padding-left: 30px;
      color: #328cff;
      position: relative;
      font-size: 18px;
    }
    .right-title:before {
      content: "";
      display: block;
      background: #328cff;
      width: 4px;
      height: 20px;
      position: absolute;
      left: 17px;
      top: 18px;
    }
    .link-list-box {
      padding: 0 0 20px 0;
      display: flex;
      flex-wrap: wrap;
      a {
        display: block;
        text-align: left;
        height: 20px;
        line-height: 20px;
        color: #808080;
        width: 90px;
        padding-left: 16px;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    a {
      text-decoration: none;
      color: #333;
    }
  } 

</style>