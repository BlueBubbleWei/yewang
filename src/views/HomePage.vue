<<template>
  <div>
    <!--头部-->
    <top></top>
    <div class="header-bottom"></div>
    <!--头部-->
    <section>
      <!--左侧-->
      <left></left>
      <center></center>
      <right></right>
    </section>
  </div>
</template>
<script>
import top from './top'
import left from './left'
import right from './right'
import center from './center'
  if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
    alert("您的浏览器版本过低，请下载IE9及以上版本");
  }
  export default {
    components:{
      top,
      left,
      right,
      center
    },
    data(){
      return {}

    }
  }
</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
  section{    
    margin: 0 auto;
    margin-top: 30px;
    width: 54vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background: lightblue;
  }
</style>