<template>
  <div class="search">
    <div class="search" id="search">
      <div class="search">
        <form action="/search" method="get">
          <input id="searchKey" type="text" name="searchKey" maxlength="10" placeholder="搜索" class="input" value="">
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  *{
    box-sizing: border-box;
  }
.search {
  background: url(../assets/s.png);
  width: 275px;
  height: 56px;
  background-size: 275px 56px;
}
.search input {
  line-height: 30px;
  padding: 13px 0 13px 50px;
  color: #999;
  background: transparent;
  outline: none;
  width: 100%;
  border: none;
}
input {
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
}
</style>