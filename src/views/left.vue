<template>
  <div class="left">
    <!--左侧-->
    <aside>
      <div class="menu">
        <a class="active" href="/64/1.html">焦点</a>
        <a href="/2/1.html">岛事</a>
        <a href="/36/1.html">时政</a>
        <a href="/39/1.html">视频</a>
        <a href="/12/1.html">专题</a>
        <a href="/50/1.html">直播</a>
        <a href="/3/1.html">国内</a>
        <a href="/4/1.html">国际</a>
        <a href="/34/1.html">社会</a>
        <a href="/40/1.html">图集</a>
        <a href="/33/1.html">财经</a>
        <a href="javascript:void(0);" class="more">更多
          <div class="more-left" style="display: none;">
            <a href="/15/1.html">娱乐</a>
            <a href="/14/1.html">体育</a>
            <a href="/17/1.html">旅游</a>
            <a href="/61/1.html">快评</a>
            <a href="/20/1.html">教育</a>
            <a href="/23/1.html">科技</a>
            <a href="/22/1.html">时尚</a>
            <a href="/18/1.html">享食天下</a>
            <a href="/19/1.html">健康养生</a>
            <a href="/16/1.html">情感人生</a>
          </div>
        </a>
      </div>
    </aside>
  </div>
</template>
<style lang="scss" scoped>
  *{
    box-sizing: border-box;
  }
  .left{
    width: 100px;
    height: auto;
  }
  .menu {
  width: 100px;
  min-height: 400px;
  background: #f8fcff;
  border: 1px solid #eff3f9;
  box-shadow: -3px 0 4px #cfe4fd;
  padding: 10px 0;
  position: relative;
  a {
    display: block;
    height: 34px;
    line-height: 34px;
    text-align: center;
    font-size: 14px;
    color: #333333;
    position: relative;
  }
  a.active, a:hover {
    color: #328cff;
    background: url(../assets/lbg.png) left center no-repeat;
    font-weight: 800;
  }
  a.more:hover .more-left{
    display: block;
  }
  a.more:before {
    content: "";
    display: block;
    background: url(../assets/m.png) no-repeat;
    -webkit-background-size: 14px 14px;
    background-size: 14px 14px;
    width: 14px;
    height: 14px;
    position: absolute;
    right: 14px;
    top: 50%;
    margin-top: -7px;
  }
  .more-left {
    width: 230px;
    height: 220px;
    position: absolute;
    left: 100px;
    bottom: 0;
    z-index: 10;
    background: #f8fcff;
    border: 1px solid #eff3f9;
    box-shadow: 2px 0 4px #cfe4fd;
    padding: 20px 15px;
    display: none;
  }
  .more-left a {
    width: 98px;
    float: left;
  }
}
</style>