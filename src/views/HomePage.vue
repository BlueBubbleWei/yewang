<<template>
  <div>
    <!--头部-->
    <header>
      <div class="left">
        <img src= "../assets/logo.png" />
      </div>
      <div class="right">
        <a>数字报纸</a>
        <a>广告合作</a>
        <a>APP下载</a>
      </div>
    </header>
    <div class="header-bottom"></div>
    <!--头部-->
    <article>
      <!--左侧-->
      <aside>
      
      </aside>
      <!--左侧-->
      <section>
      
      </section>
    </article>
  </div>
</template>
<script>
  if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
    alert("您的浏览器版本过低，请下载IE9及以上版本");
  }
</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
  html,body{
    margin: 0;
    padding: 0;
  }
  body{
    boder: 1px solid #fff;
  }
  header{
    width: 70vw;
    height: 56px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background: lightblue;
  }
  header img{
    height: 45px;
    vertical-align: middle;
  }
  header .right{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  header .right a{
    margin: 0 1vw;
    background: #f8fdff;
    padding: 0 5px;
    text-align: center;
    border-radius: 10px;
  }
  .header-bottom {
    background: url(../assets/nav-bg.jpg) top center repeat-x;
    width: 100%;
    height: 18px;
  }

  .article{

  }
</style>