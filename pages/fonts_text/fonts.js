// pages/fonts_text/fonts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    F: ""
  },
  calc: function(e) { //事件处理函数
    var C, F; //定义变量
    C = e.detail.value; //获取input组件中输入的数值(value)
    this.data.F = C * 9 / 5 + 32
  }


})