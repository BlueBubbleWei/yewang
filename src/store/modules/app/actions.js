export default {
  LOAD_ROUTER_DATA(state) {
    return new Promise((reslove, reject) => {
      setTimeout(() => {
        state.commit("SET_HTML_DATA", "成功");
        reslove();
      }, 500);
    })
  }
}
