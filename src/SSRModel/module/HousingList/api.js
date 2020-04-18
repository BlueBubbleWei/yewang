export function POST_HousingList(param) {
  this.data.param = param;
  return new Promise((reslove, reject) => {
    /**
     * 参数，在渲染时，根据URL,GET进行传送
     */
    setTimeout(() => {
      this.data.list = [{
          value: 0,
          label: "更新list1"
        },
        {
          value: 2,
          label: "更新list2"
        },
        {
          value: 3,
          label: "更新list3"
        }
      ]
      reslove();
    }, 1000)
  })
}