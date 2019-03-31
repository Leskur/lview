const page = require("../../utils/page");
Component({
  // 组件属性
  properties: {
    title: {
      type: String,
      value: ""
    },
    back: {
      type: Boolean,
      value: true
    },
    fill: {
      type: Boolean,
      value: true
    },
    delta: {
      type: Number,
      value: 1
    },
    lStyle: {
      type: String,
      value: ""
    },
    backgroundColor: {
      type: String,
      value: "#353535"
    },
    color: {
      type: String,
      value: "#fff"
    },
    fixed: {
      type: Boolean,
      value: false
    }
  },
  data: {
    statusBarHeight: 20,
    navbarHeight: 64
  },
  methods: {
    init: function() {
      const res = wx.getSystemInfoSync();
      let { system, model, statusBarHeight } = res;
      this.setData({ statusBarHeight });
      if (/iOS/.test(system)) {
        this.setData({
          navbarHeight: /X|unknown/.test(model) ? 88 : 64
        });
      } else if (/Android/.test(system))
        this.setData({
          navbarHeight: 68
        });
    }
  },
  ready: function() {
    this.init();
    if (page.count() == 1)
      this.setData({
        back: false
      });
  },
  externalClasses: ["l-class"]
});
