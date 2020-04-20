<template>
  <div class="center">
    <div class="content">
    
    </div>
    <article>
      <div class="img-list">
      </div>
    </article>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  }
}
</script>
<style lang="scss" scoped>
  @import './common.scss';
  *{
    box-sizing: border-box;
  }
  .center{
    width: 515px;
  }
  .content{
    width: 515px;
    height: 238px;
    position: relative;
    /* overflow: hidden; */
    margin-bottom: 15px;
    background: yellowgreen;
    article{
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
      }
    }
  }
</style>