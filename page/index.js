// component/page/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的初始数据
   */
  data: {
    windowWidth: 0,
    windowHeight: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init: function () {
      const res = wx.getSystemInfoSync()
      let { windowHeight, windowWidth } = res
      this.setData({
        windowWidth,
        windowHeight
      })
    },
  },
  ready() {
    this.init()
  },
  externalClasses: ["l-class"]
})
