const form = require("../../model/wechat/form");
const page = require("../../utils/page");
const app = getApp();
const { regeneratorRuntime } = app;
Component({
  // 组件属性
  properties: {
    title: {
      type: String,
      value: "富有青年"
    },
    back: {
      type: Boolean,
      value: true
    },
    delta: {
      type: Number,
      value: 1
    },
    exstyle: {
      type: String,
      value: ""
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
    init: function () {
      const res = wx.getSystemInfoSync()
      let { system, model, statusBarHeight } = res
      this.setData({ statusBarHeight })
      if (/iOS/.test(system)) {
        this.setData({
          navbarHeight: /X|unknown/.test(model) ? 88 : 64
        })
      }
      else if (/Android/.test(system)) this.setData({
        navbarHeight: 68
      })
    },
    formSubmit: async function (e) {

      let formId = e.detail.formId;
      console.log(formId)
      let user = await app.getGlobalUser();
      if (user)
        form.create({
          user_id: user._id.$id,
          form_id: formId
        });
    }
  },
  ready: function () {
    this.init()
    if (page.count() == 1)
      this.setData({
        back: false
      });
  },
  externalClasses: ["l-class"]
});
