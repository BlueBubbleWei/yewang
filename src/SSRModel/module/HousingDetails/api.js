export function POST_getHousingDetails(param) {
  /**
   * query参数赋值
   */
  this.model.param = param;
  return new Promise((reslove, reject) => {
    /**
     * 参数，在渲染时，根据URL,GET进行传送
     */
    setTimeout(() => {
      this.model.name = "二手房详情";
      reslove();
    }, 500)
  })
}
