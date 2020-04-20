<template>
  <div class="header">
    <header>
      <div class="left">
        <img src= "../assets/logo.png" />
      </div>
      <div class="right">
        <a>数字报纸</a>
        <a>广告合作</a>
        <a class="active">APP下载</a>
      </div>
    </header>
  </div>
</template>
<style>
  *{
    box-sizing: border-box;
  }
  header{
    width: 54vw;
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
    padding-right: 200px;
  }
  header .right a{
    margin: 0 1vw;
    background: #f8fdff;
    padding: 1px 8px;
    text-align: center;
    border-radius: 10px;
  }
  header .right .active{
    color: #ffffff;
    background: #579fff;
  }
  .header-bottom {
    background: url(../assets/nav-bg.jpg) top center repeat-x;
    width: 100%;
    height: 18px;
  }
</style>