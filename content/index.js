// component/content/index.js
/**
 * 该组件与自定义组件 Navbar 搭配使用
 * 可适配小程序页面内容高度
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    contentHeight: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init: function () {
      const res = wx.getSystemInfoSync()
      let { system, model, windowHeight } = res
      let navbarHeight = 64;
      if (/iOS/.test(system)) {
        navbarHeight = /X|unknown/.test(model) ? 88 : 64
      }
      else if (/Android/.test(system))
        navbarHeight = 68
      this.setData({
        contentHeight: windowHeight - navbarHeight
      })
    },
  },

  ready() {
    this.init()
  },
  externalClasses: ['l-class']
})
