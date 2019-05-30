<!-- 组件介绍 -->
以下组件是为了实现尽量多的获取 formid

<!-- navbar -->
navbar 自定义小程序头部组件
<!-- 属性 -->
fixed 为 true 时，navbar 为 固定模式

<!-- content -->
content 自定义页面内容组件，用于使用自定义 navbar 时适配页面高度
页面滚动使用 scroll-view 实现
<!-- 属性 -->
scroll-y 属性控制页面是否支持滚动
<!-- 事件 -->
scrolltolower 页面滚动到底部时触发

<!-- form 组件 -->
form 用于获取 formid 的组件，该组件实现的重点在于，获取 formid 的按钮，需要使用样式 button:after
使用方法：引入组件后，嵌套在需要触发的组件上即可。
如：<l-form><button>点我</button></l-form>

form 组件可嵌套使用，提交 formid 代码实现见 /lview/form/index.js

<!-- 注意事项 -->
<!-- 搭配使用 -->
navbar 组件一般配合 content 组件使用
在解决 textarea 兼容问题时，可单独使用 navbar 组件

<!-- textarea 兼容问题 -->
页面有 textarea 组件的时候请勿使用自定义 navbar
最好的解决方案：放弃在该页面的 navbar 上获取 formid，关闭页面自定义 navbar 配置
若确定 textarea 组件滚动不会超过 navbar 时，可在 navbar 组件上添加 fixed 属性
