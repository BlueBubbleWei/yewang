<template>
  <div>
    <div @click="onChange">点击</div>
    <a href="/article">列表页</a>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      store: null
    };
  },
  /**
   * vuex异步
   */
  methods: {
    /**
     * asdfasdffd
     */
    onChange() {
      this.$store.commit("SET_HTML_DATA", "加载");
    }
  },
  // beforeMount() {
  //     console.log(this)
  //     this.dataPromise.then(() => {
  //         //对数据再处理
  //         console.log('=============')
  //         //computed是在被调用时才会加载数据,data在初始化时不能直接调用computed的数据否则会抛出异常,可以把赋值操作放到这里
  //     })
  // },
  created() {}
};
</script>