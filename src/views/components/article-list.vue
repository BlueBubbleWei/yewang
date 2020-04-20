<template>
  <div class="article">
    <div class="img-list">
      <div class="fl">
        <!--新专题-->
        <a href="http://yewang.yztest.top/z/168.html"
          style="background: url(http://cdn.cctv69.top/test/materialResource/155055983172668.blob) no-repeat;background-position: top center;background-size: cover;" class="image"></a>
      </div>
      <div class="fl rinfo">
        <a href="http://yewang.yztest.top/z/168.html" class="title">11</a>                                  
          <div class="info">
            <a class="btn br3 tc" href="/12/1.html">专题</a>

            <span class="bagae"></span>
            <span class="bagae">2019-02-19</span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data (){
    return{}
  },
  created(){

  }
}
</script>
<style lang="scss">
  @import './../common.scss';
  .img-list {
    width: 100%;
    height: 100px;
    padding: 15px 22px;
    margin-bottom: 8px;
    box-shadow: 0 0 3px #c7c7c7;
    display: flex;
    background: #ffffff;
    .fl {
      margin-right: 10px;
    }
    .image {
      width: 110px;
      height: 70px;
      display: block;
    }
    .rinfo .title {
      height: 48px;
      line-height: 24px;
      display: block;
      width: 340px;
      overflow: hidden;
      color: #222;
      font-weight: 700;
    }
    .rinfo{
      .info {
        display: block;
        width: 340px;
        overflow: hidden;
        height: 23px;
        .tc {
          text-align: center;
        }
        .br3 {
          border-radius: 3px;
        }
        a {
          text-decoration: none;
          color: #333;
        }
        .btn {
          display: inline-block;
          height: 22px;
          line-height: 22px;
          background: #e0edff;
          font-size: 12px;
          padding: 0 5px;
          color: #328cff;
        }  
        .bagae {
          display: inline-block;
          font-size: 10px;
          color: #999;
          margin: 0 10px;
        }
      }
    }
  }
</style>